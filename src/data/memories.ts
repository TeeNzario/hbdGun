export type MemoryChapter = {
  id: number;
  title: string;
  date: string;
  story: string;
  image: string;
  alt: string;
  objectPosition: string;
  objectName: string;
  hint: string;
};

export const birthdayStory = {
  recipientName: "กัญ",
  opening: {
    prelude: "There is something waiting for you.",
    soundNote: "เสียงจะทำให้เรื่องราวสมบูรณ์ขึ้น",
    forestLine: "คืนนี้ ป่าแห่งนี้กำลังรอเธออยู่",
  },
  chapters: [
    {
      id: 1,
      title: "คนที่รอเก่งที่สุด",
      date: "2019",
      story:
        "ทีนยังจำได้อยู่ตลอดในช่วงมัธยมที่เราคอลกันทุกวัน และหากวันไหนที่ทีนมีงานและยังทำไม่เสร็จ กัญก็จะรออยู่ข้างๆ จนกว่าทีนจะเสร็จงาน และคอยให้กำลังใจทีนอยู่เสมอ เช่น ตอนทำการ์ดวันคริสมาสต์เกือบเช้าเลยตอนนั้น",
      image: "/images/chapter-01.jpg",
      alt: "ภาพความทรงจำบทที่หนึ่ง",
      objectPosition: "center 42%",
      objectName: "ขนนกสีขาว",
      hint: "แตะขนนกที่สว่างที่สุด",
    },
    {
      id: 2,
      title: "ไอดอลในการจดโน๊ต",
      date: "2020",
      story:
        "ก่อนหน้านั้นที่ผ่านมาทีนไม่เคยสนใจการจดโน๊ตเลย แต่พอได้เห็นโน๊ตของกัญแล้วทำให้ทีนอยากจดโน๊ตขึ้นมา และนั่นมีส่วนมากๆ ทำให้ผลการเรียนดีขึ้นส่งผลมาจนถึงมหาลัยเลยล่ะ ยังคงจดโน๊ตอยู่เหมือนเดิม และยังคงเป็นไอดอลในการจดโน๊ตของทีนอยู่เสมอ",
      image: "/images/chapter-02.jpg",
      alt: "ภาพความทรงจำบทที่สอง",
      objectPosition: "center 38%",
      objectName: "ดอกไม้จันทรา",
      hint: "แตะหิ่งห้อยให้ครบ แล้วดอกไม้จะผลิบาน",
    },
    {
      id: 3,
      title: "คนที่สวยที่สุด และน่ารักที่สุด",
      date: "2021",
      story:
        "หลายๆ ครั้งที่ทีนยังแอบมองกัญอยู่ และคิดว่าทำไมกัญถึงน่ารักจัง บางครั้งยังแทบไม่เชื่อว่านี่เป็นแฟนของทีนจริงๆ และยังคงเป็นความรู้สึกนี้อยู่เสมอ",
      image: "/images/chapter-03.jpg",
      alt: "ภาพความทรงจำบทที่สาม",
      objectPosition: "center 50%",
      objectName: "ผลึกใส",
      hint: "ปัดหมอกออก เพื่อเผยสิ่งที่ซ่อนอยู่",
    },
    {
      id: 4,
      title: "คนที่รับฟังเก่งมากที่สุดดดดดดดดด",
      date: "2022",
      story:
        "ทีนนับถือกัญมากๆ ในเรื่องการรับฟัง คือฟังทุกอย่างที่ทีนพูด มีความสนใจในสิ่งที่ทีนพูดอยู่ตลอด แม้จะเป็นเรื่องอะไรก็ไม่รู้บางทีที่ตัวเองเกิดสนใจในเวลานั้นก็มาพูดให้กัญฟัง กัญก็เป็นผู้ฟังที่ดีเสมอมา",
      image: "/images/chapter-04.jpg",
      alt: "ภาพความทรงจำบทที่สี่",
      objectPosition: "center 44%",
      objectName: "หน้ากระดาษเก่า",
      hint: "แตะหน้ากระดาษที่ติดอยู่ใต้รากไม้",
    },
    {
      id: 5,
      title: "คนที่ให้กำลังใจเก่งที่สุด",
      date: "2023",
      story:
        "ไม่ว่าเรื่องจะเล็กหรือใหญ่แค่ไหน กัญก็ไม่ลืมที่จะให้กำลังใจทีนอยู่เสมอ ซัพพอร์ตทุกเรื่องที่ทีนทำ",
      image: "/images/chapter-05.jpg",
      alt: "ภาพความทรงจำบทที่ห้า",
      objectPosition: "center 48%",
      objectName: "กล่องดนตรีโบราณ",
      hint: "แตะกล่องดนตรี แล้วฟังโน้ตสามตัว",
    },
    {
      id: 6,
      title: "คนที่พึ่งพาได้ที่สุด",
      date: "2024",
      story:
        "กัญเก่งมากๆ หลายๆ ครั้งที่กล้าเดินทางเองคนเดียว ตอนทีนเดินทางกับกัญมันไม่มีความกังวลใจอะไรเลยเพราะเชื่อใจว่าหากเจอปัญหากัญจะสามารถหาวิธีแก้ได้อยู่เสมอ",
      image: "/images/chapter-06.jpg",
      alt: "ภาพความทรงจำปีที่หก",
      objectPosition: "center 43%",
      objectName: "ล็อกเก็ตสีเงิน",
      hint: "แตะล็อกเก็ตที่เก็บแสงของเราไว้",
    },
    {
      id: 7,
      title: "คนที่ทุ่มเทที่สุด",
      date: "2025",
      story:
        "หลายๆ ครั้งที่ทีนเห็นกัญทุ่มเทกับสิ่งที่ทำมากๆ ทั้งเรื่องเรียน เรื่องงาน และเรื่องอื่นๆ กัญเป็นคนที่ทุ่มเทกับทุกสิ่งที่ทำมากๆ เช่น งานสโมสรของคณะ งานของที่ฝึกงาน หลายๆ ครั้งกัญจะยกมันมาเป็นที่หนึ่ง ซึี่งทีนเคยแอบน้อยใจแต่สุดท้ายทีนก็ภูมิใจในตัวกัญมากๆ เท่สุดๆ",
      image: "/images/chapter-07.jpg",
      alt: "ภาพความทรงจำปีที่เจ็ด",
      objectPosition: "center 47%",
      objectName: "กุญแจแสงจันทร์",
      hint: "แตะกุญแจเพื่อเปิดทางไปสู่ปีต่อไป",
    },
    {
      id: 8,
      title: "คนที่รักที่สุด",
      date: "2026",
      story:
        "กัญเป็นคนที่ทีนรักมากที่สุดในโลกใบนี้เลยนะ ยังมีอีกหลายยยยยอย่างที่อยากทำด้วยกัญ เติบโตไปด้วยกันนะ",
      image: "/images/chapter-08.jpg",
      alt: "ภาพความทรงจำปีที่แปด",
      objectPosition: "center 45%",
      objectName: "นาฬิกาทรายดวงดาว",
      hint: "แตะนาฬิกาทราย เพื่อเก็บปีที่แปดของเรา",
    },
  ] satisfies MemoryChapter[],
  finale: {
    lines: [
      "ทีนภูมิใจในตัวกัญมากๆ นะ",
      "ขอให้กัญเป็นตัวของตัวเอง",
      "มีความสุขกับเส้นทางที่เลือกเดิน",
      "และทีนจะเดินไปด้วย",
      "ขอบคุณที่เกิดมานะ",
    ],
    birthday: "สุขสันต์วันเกิดนะ",
    button: "มีอีกอย่างที่อยากให้กัญดู",
  },
  video: {
    src: "/media/birthday-message.mp4",
    poster: "/images/video-poster.jpg",
    captions: "/media/birthday-message-th.vtt",
  },
  closing: [
    "เติบโตมาอย่างดีเลยนะ เด็กน้อยคนนั้น",
  ],
  audio: {
    // Replace these files to use recorded ambience. The experience also includes
    // a lightweight Web Audio fallback, so it still works before files are added.
    rain: "/audio/rain.mp3",
    forest: "/audio/forest.mp3",
    wind: "/audio/wind.mp3",
    piano: "/audio/piano.mp3",
    chime: "/audio/chime.mp3",
    collect: "/audio/collect.mp3",
    finale: "/audio/finale.mp3",
  },
} as const;

export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
