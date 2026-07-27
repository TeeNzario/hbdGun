"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { assetPath, birthdayStory } from "@/src/data/memories";

type Scene = "opening" | "forest" | "memory" | "finale" | "video" | "closing";

const PARTICLES = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 37) % 86)}%`,
  top: `${18 + ((index * 53) % 67)}%`,
  delay: `${(index % 7) * 0.41}s`,
  duration: `${4.4 + (index % 5) * 0.8}s`,
}));
const TOTAL_CHAPTERS = birthdayStory.chapters.length;
const PROGRESS_STORAGE_KEY = "birthday-forest-progress-v8";

function useSoundscape() {
  const contextRef = useRef<AudioContext | null>(null);
  const rainGainRef = useRef<GainNode | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const sourcesRef = useRef<AudioScheduledSourceNode[]>([]);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  const start = useCallback(async () => {
    if (contextRef.current) {
      await contextRef.current.resume();
      setStarted(true);
      return;
    }
    const AudioContextClass =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const master = ctx.createGain();
    master.gain.value = 0.16;
    master.connect(ctx.destination);

    const rainBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = rainBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
    const rain = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const rainGain = ctx.createGain();
    filter.type = "lowpass";
    filter.frequency.value = 1900;
    rainGain.gain.value = 0.48;
    rain.buffer = rainBuffer;
    rain.loop = true;
    rain.connect(filter).connect(rainGain).connect(master);
    rain.start();

    const wind = ctx.createOscillator();
    const windGain = ctx.createGain();
    wind.type = "sine";
    wind.frequency.value = 83;
    windGain.gain.value = 0.025;
    wind.connect(windGain).connect(master);
    wind.start();

    contextRef.current = ctx;
    rainGainRef.current = rainGain;
    masterRef.current = master;
    sourcesRef.current = [rain, wind];
    setStarted(true);
  }, []);

  const playChime = useCallback((notes = [523.25, 659.25, 783.99]) => {
    const ctx = contextRef.current;
    const master = masterRef.current;
    if (!ctx || !master || muted) return;
    notes.forEach((frequency, index) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0, ctx.currentTime + index * 0.16);
      gain.gain.linearRampToValueAtTime(0.11, ctx.currentTime + index * 0.16 + 0.03);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + index * 0.16 + 1.1,
      );
      oscillator.connect(gain).connect(master);
      oscillator.start(ctx.currentTime + index * 0.16);
      oscillator.stop(ctx.currentTime + index * 0.16 + 1.2);
    });
  }, [muted]);

  const setRainLevel = useCallback((level: number) => {
    const ctx = contextRef.current;
    const gain = rainGainRef.current;
    if (ctx && gain) gain.gain.linearRampToValueAtTime(level, ctx.currentTime + 1.5);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("birthday-forest-muted") === "true";
    setMuted(saved);
  }, []);

  useEffect(() => {
    const onVisibility = () => {
      const ctx = contextRef.current;
      if (!ctx) return;
      if (document.hidden) void ctx.suspend();
      else if (started && !muted) void ctx.resume();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [muted, started]);

  useEffect(() => {
    if (masterRef.current) masterRef.current.gain.value = muted ? 0 : 0.16;
    sessionStorage.setItem("birthday-forest-muted", String(muted));
  }, [muted]);

  return { muted, setMuted, start, playChime, setRainLevel };
}

function SoundToggle({
  muted,
  onToggle,
}: {
  muted: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className="sound-toggle"
      onClick={onToggle}
      aria-label={muted ? "เปิดเสียง" : "ปิดเสียง"}
      title={muted ? "เปิดเสียง" : "ปิดเสียง"}
    >
      <span className={muted ? "speaker muted" : "speaker"} aria-hidden="true" />
    </button>
  );
}

function ProgressMoonstones({ count }: { count: number }) {
  return (
    <div
      className="moonstone-progress"
      aria-label={`เก็บความทรงจำแล้ว ${count} จาก ${TOTAL_CHAPTERS}`}
    >
      {birthdayStory.chapters.map((chapter, index) => (
        <span
          className={index < count ? "moonstone collected" : "moonstone"}
          key={chapter.id}
          role="img"
          aria-label={`ความทรงจำที่ ${chapter.id} ${index < count ? "เก็บแล้ว" : "ยังไม่เก็บ"}`}
        />
      ))}
    </div>
  );
}

function Collectible({
  index,
  onCollect,
  playChime,
}: {
  index: number;
  onCollect: () => void;
  playChime: (notes?: number[]) => void;
}) {
  const [fireflies, setFireflies] = useState(0);
  const [wipe, setWipe] = useState(0);
  const dragStart = useRef<number | null>(null);
  const chapter = birthdayStory.chapters[index];

  const trigger = () => {
    if (index === 1 && fireflies < 3) return;
    if (index === 2 && wipe < 65) return;
    if (index === 4) {
      playChime([392, 493.88, 659.25]);
      window.setTimeout(onCollect, 900);
      return;
    }
    playChime(index === 0 ? [880] : [523.25, 783.99]);
    onCollect();
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (index !== 2 || dragStart.current === null) return;
    setWipe(Math.min(100, Math.abs(event.clientX - dragStart.current) * 0.75));
  };

  return (
    <motion.div
      className={`collectible-zone object-${index + 1}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.7, filter: "blur(10px)" }}
      onPointerDown={(event) => {
        dragStart.current = event.clientX;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={onPointerMove}
      onPointerUp={() => {
        dragStart.current = null;
        if (index === 2 && wipe >= 65) trigger();
      }}
    >
      {index === 1 && (
        <div className="flower-fireflies" aria-label="แตะหิ่งห้อยสามตัว">
          {[0, 1, 2].map((item) => (
            <button
              key={item}
              className={item < fireflies ? "mini-firefly found" : "mini-firefly"}
              onClick={() => {
                setFireflies((value) => Math.min(3, value + 1));
                playChime([660 + item * 110]);
              }}
              aria-label={`หิ่งห้อยตัวที่ ${item + 1}`}
            />
          ))}
        </div>
      )}
      <button
        type="button"
        className={`magic-object magic-object-${index + 1} ${
          index === 1 && fireflies >= 3 ? "bloomed" : ""
        }`}
        onClick={trigger}
        aria-label={`เก็บ${chapter.objectName}`}
      >
        {index === 0 && <span className="feather-shape" />}
        {index === 1 && <span className="flower-shape"><i /><i /><i /><i /><b /></span>}
        {index === 2 && <span className="crystal-shape" />}
        {index === 3 && <span className="page-shape">เรา</span>}
        {index === 4 && <span className="music-box-shape"><i /></span>}
        {index === 5 && <span className="locket-shape"><i /></span>}
        {index === 6 && <span className="moon-key-shape"><i /><b /></span>}
        {index === 7 && <span className="hourglass-shape"><i /><b /></span>}
      </button>
      {index === 2 && <div className="wipe-fog" style={{ opacity: 1 - wipe / 100 }} />}
      <motion.p
        className="object-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.78 }}
        transition={{ delay: 1.1 }}
      >
        {chapter.hint}
      </motion.p>
    </motion.div>
  );
}

function MemoryChapter({
  index,
  onKeep,
  onClose,
}: {
  index: number;
  onKeep: () => void;
  onClose: () => void;
}) {
  const chapter = birthdayStory.chapters[index];
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="memory-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="memory-title"
      tabIndex={-1}
      ref={dialogRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="close-button" onClick={onClose} aria-label="ปิดความทรงจำ">×</button>
      <motion.figure
        className="memory-photo"
        initial={{ opacity: 0, scale: 1.08, filter: "blur(9px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(chapter.image)}
          alt={chapter.alt}
          loading={index === 0 ? "eager" : "lazy"}
          style={{ objectPosition: chapter.objectPosition }}
        />
        <span className="photo-reflection" />
      </motion.figure>
      <div className="memory-copy">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          ปีที่ {String(chapter.id).padStart(2, "0")} · จาก {TOTAL_CHAPTERS} ปีของเรา
        </motion.p>
        <motion.h2
          id="memory-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {chapter.title}
        </motion.h2>
        <motion.time initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
          {chapter.date}
        </motion.time>
        <motion.p
          className="memory-story"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
        >
          {chapter.story}
        </motion.p>
        <motion.button
          className="cinematic-button"
          onClick={onKeep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          เก็บความทรงจำนี้ไว้ <span aria-hidden="true">→</span>
        </motion.button>
      </div>
      <div className="memory-dust" aria-hidden="true" />
    </motion.div>
  );
}

export default function BirthdayExperience() {
  const reducedMotion = useReducedMotion();
  const [scene, setScene] = useState<Scene>("opening");
  const [collected, setCollected] = useState<number[]>([]);
  const [activeMemory, setActiveMemory] = useState(0);
  const [introLine, setIntroLine] = useState(false);
  const [branchMoved, setBranchMoved] = useState(false);
  const [lightning, setLightning] = useState(false);
  const [parallax, setParallax] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const dragStart = useRef<number | null>(null);
  const audio = useSoundscape();

  const progress = collected.length;
  const visualLevel = Math.min(5, Math.round((progress / TOTAL_CHAPTERS) * 5));
  const forestStyle = useMemo(
    () =>
      ({
        "--parallax": `${parallax}px`,
        "--forest-light": `${0.72 + visualLevel * 0.075}`,
        "--rain-opacity": `${Math.max(0, 0.65 - visualLevel * 0.11)}`,
        "--forest-image": `url("${assetPath("/images/forest-night.jpg")}")`,
        "--video-poster": `url("${assetPath(birthdayStory.video.poster)}")`,
      }) as React.CSSProperties,
    [parallax, visualLevel],
  );

  useEffect(() => {
    const saved = sessionStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved) as { collected: number[] };
      setCollected(
        parsed.collected.filter((value) => value >= 0 && value < TOTAL_CHAPTERS),
      );
    } catch {
      sessionStorage.removeItem(PROGRESS_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({ collected }));
    audio.setRainLevel(
      Math.max(0.02, 0.48 * (1 - collected.length / TOTAL_CHAPTERS)),
    );
  }, [audio.setRainLevel, collected]);

  const begin = async () => {
    await audio.start();
    setScene("forest");
    window.setTimeout(() => setIntroLine(true), 500);
    window.setTimeout(() => setIntroLine(false), reducedMotion ? 2300 : 3900);
  };

  const collectObject = () => {
    setLightning(true);
    audio.playChime();
    window.setTimeout(() => {
      setLightning(false);
      setActiveMemory(progress);
      setScene("memory");
    }, reducedMotion ? 120 : 520);
  };

  const keepMemory = () => {
    const next = Array.from(new Set([...collected, activeMemory]));
    setCollected(next);
    audio.playChime([523.25, 698.46, 880]);
    if (next.length === TOTAL_CHAPTERS) {
      setScene("finale");
      audio.setRainLevel(0);
    } else {
      setScene("forest");
    }
  };

  const reset = () => {
    setCollected([]);
    setActiveMemory(0);
    setScene("opening");
    setIntroLine(false);
    setVideoError(false);
    sessionStorage.removeItem(PROGRESS_STORAGE_KEY);
  };

  const onForestPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    setParallax(Math.max(-24, Math.min(24, delta * 0.12)));
  };

  return (
    <main className={`experience scene-${scene} evolution-${visualLevel}`} style={forestStyle}>
      <div className="orientation-notice" role="status">
        <span className="phone-icon" aria-hidden="true" />
        <p>เรื่องราวนี้งดงามที่สุดเมื่อถือโทรศัพท์แนวตั้ง</p>
      </div>

      <div className="forest-canvas" aria-hidden={scene === "opening"}>
        <div className="forest-image" />
        <div className="moon-glow" />
        <div className="distant-mist mist-one" />
        <div className="distant-mist mist-two" />
        <div className="light-rays" />
        <button
          className={branchMoved ? "branch branch-moved" : "branch"}
          onClick={() => setBranchMoved(true)}
          aria-label="กิ่งไม้ที่ไหวเบา ๆ"
          tabIndex={scene === "forest" ? 0 : -1}
        />
        <div className="bird-silhouette" />
        <div className="rain-layer" />
        <div className="ground-vignette" />
        <div className="fireflies" aria-hidden="true">
          {PARTICLES.map((particle) => (
            <i
              key={particle.id}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
        {progress >= 3 && <span className="falling-star" />}
        {progress >= 4 && <div className="glowing-flowers" />}
      </div>

      <div className="film-grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      {lightning && <motion.div className="lightning" initial={{ opacity: 0 }} animate={{ opacity: [0, .34, 0, .2, 0] }} />}

      <AnimatePresence mode="wait">
        {scene === "opening" && (
          <motion.section
            className="opening-scene"
            key="opening"
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.2 : 1.2 }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
              <span className="opening-mark" aria-hidden="true">✦</span>
              <h1>{birthdayStory.opening.prelude}</h1>
              <button className="cinematic-button begin-button" onClick={begin}>Begin</button>
              <p>{birthdayStory.opening.soundNote}</p>
            </motion.div>
          </motion.section>
        )}

        {scene === "forest" && (
          <motion.section
            className="forest-scene"
            key={`forest-${progress}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onPointerDown={(event) => {
              dragStart.current = event.clientX;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={onForestPointerMove}
            onPointerUp={() => {
              dragStart.current = null;
              setParallax(0);
            }}
          >
            <AnimatePresence>
              {introLine && (
                <motion.p
                  className="forest-intro-line"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {birthdayStory.opening.forestLine}
                </motion.p>
              )}
            </AnimatePresence>
            <p className="location-label">
              <span>{String(progress + 1).padStart(2, "0")}</span>
              เส้นทางปีที่ {Math.min(progress + 1, TOTAL_CHAPTERS)}
            </p>
            {progress < TOTAL_CHAPTERS && (
              <Collectible index={progress} onCollect={collectObject} playChime={audio.playChime} />
            )}
            <motion.p
              className="mist-secret"
              animate={{ opacity: [0, 0.35, 0] }}
              transition={{ duration: 7, repeat: Infinity, repeatDelay: 5 }}
            >
              บางสิ่งยังคงสว่าง แม้ในคืนที่มืดที่สุด
            </motion.p>
          </motion.section>
        )}

        {scene === "memory" && (
          <MemoryChapter
            key={`memory-${activeMemory}`}
            index={activeMemory}
            onKeep={keepMemory}
            onClose={() => setScene("forest")}
          />
        )}

        {scene === "finale" && (
          <motion.section className="finale-scene" key="finale" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="heart-fireflies" aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => <i key={i} />)}
            </div>
            <div className="final-copy">
              {birthdayStory.finale.lines.map((line, index) => (
                <motion.p key={line} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + index * 1.15 }}>
                  {line}
                </motion.p>
              ))}
              <motion.h2 initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4.35, duration: 1.1 }}>
                {birthdayStory.finale.birthday}
              </motion.h2>
              <motion.div className="recipient-name" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.2 }}>
                {birthdayStory.recipientName}<span className="landed-firefly" />
              </motion.div>
              <motion.button
                className="cinematic-button finale-button"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6.2 }}
                onClick={() => setScene("video")}
              >
                {birthdayStory.finale.button} <span aria-hidden="true">→</span>
              </motion.button>
            </div>
          </motion.section>
        )}

        {scene === "video" && (
          <motion.section className="video-scene" key="video" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <button className="close-button video-close" onClick={() => setScene("finale")} aria-label="ปิดวิดีโอ">×</button>
            <div className="video-heading">
              <span>A final memory</span>
              <p>กดเล่นเมื่อเธอพร้อม</p>
            </div>
            <div className="video-frame">
              {!videoError ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={assetPath(birthdayStory.video.poster)}
                  onError={() => setVideoError(true)}
                  onEnded={() => setScene("closing")}
                >
                  <source src={assetPath(birthdayStory.video.src)} type="video/mp4" />
                  <track kind="captions" src={assetPath(birthdayStory.video.captions)} srcLang="th" label="ภาษาไทย" />
                </video>
              ) : (
                <div className="video-placeholder" role="status">
                  <span aria-hidden="true">◌</span>
                  <h3>วิดีโอยังรออยู่</h3>
                  <p>เพิ่มไฟล์ birthday-message.mp4 แล้วกลับมาเปิดช่วงเวลานี้อีกครั้ง</p>
                  <button className="cinematic-button" onClick={() => setScene("closing")}>อ่านข้อความสุดท้าย</button>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {scene === "closing" && (
          <motion.section className="closing-scene" key="closing" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="opening-mark" aria-hidden="true">✦</span>
            {birthdayStory.closing.map((line, index) => (
              <motion.p key={line} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 + index * .9 }}>
                {line}
              </motion.p>
            ))}
            <motion.div className="closing-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
              <button onClick={() => { setVideoError(false); setScene("video"); }}>ดูอีกครั้ง</button>
              <button onClick={() => { setActiveMemory(0); setScene("memory"); }}>กลับไปดูความทรงจำ</button>
              <button onClick={reset}>เริ่มเรื่องราวใหม่</button>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {scene !== "opening" && (
        <>
          <SoundToggle muted={audio.muted} onToggle={() => audio.setMuted((value) => !value)} />
          {scene !== "video" && scene !== "closing" && <ProgressMoonstones count={progress} />}
        </>
      )}
    </main>
  );
}
