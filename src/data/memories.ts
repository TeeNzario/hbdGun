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
      title: "ดอกไม้วาเลนไทน์ปีแรก",
      date: "2019",
      story:
        "ผมรวบรวมความกล้าซื้อดอกไม้ที่ร้านขายของชำใกล้บ้านแล้วกะจังหวะเวลารีบแล้วไปให้เช้ากว่าปกติมากๆ เพื่อที่จะไปดักรอและเซอร์ไพรส์ให้ดอกไม้",
      image: "/images/chapter-01.jpg",
      alt: "ภาพความทรงจำบทที่หนึ่ง",
      objectPosition: "center 42%",
      objectName: "ขนนกสีขาว",
      hint: "แตะขนนกที่สว่างที่สุด",
    },
    {
      id: 2,
      title: "ผมให้ของขวัญวันปัจฉิม",
      date: "2020",
      story:
        "แล้วกัญก็ถ่ายลง stories รีแอ๊คชั่นของของขวัญซึ่งน่ารักมากๆ",
      image: "/images/chapter-02.jpg",
      alt: "ภาพความทรงจำบทที่สอง",
      objectPosition: "center 38%",
      objectName: "ดอกไม้จันทรา",
      hint: "แตะหิ่งห้อยให้ครบ แล้วดอกไม้จะผลิบาน",
    },
    {
      id: 3,
      title: "วันคริสต์มาส",
      date: "2021",
      story:
        "เทศกาลที่เราสองคนชอบเหมือนกัน ได้ถ่ายด้วยกัญ น่ารักมากเช่นกัน",
      image: "/images/chapter-03.jpg",
      alt: "ภาพความทรงจำบทที่สาม",
      objectPosition: "center 50%",
      objectName: "ผลึกใส",
      hint: "ปัดหมอกออก เพื่อเผยสิ่งที่ซ่อนอยู่",
    },
    {
      id: 4,
      title: "ถ่ายรูปให้ไม่ใช่ครั้งแรก",
      date: "2022",
      story:
        "มีความรู้สึกว่าภาพนี้คุมโทนดีทุกอย่างดีไปหมดเลยใช้รูปนี้ในการแฮปปี้เบิร์ธเดย์ปีนั้น กัญเป็นนางแบบให้หลายงานเลยล่ะ",
      image: "/images/chapter-04.jpg",
      alt: "ภาพความทรงจำบทที่สี่",
      objectPosition: "center 44%",
      objectName: "หน้ากระดาษเก่า",
      hint: "แตะหน้ากระดาษที่ติดอยู่ใต้รากไม้",
    },
    {
      id: 5,
      title: "รูปถ่ายก่อนเริ่มเส้นทางใหม่",
      date: "2023",
      story:
        "นัดกัญถ่ายรูป ก่อนที่จะไปเรียนมหาลัยกัน โทนภาพ ความรู้สึก เป็นอีกหนึ่งเซ็ตรูปที่ชอบมากๆ",
      image: "/images/chapter-05.jpg",
      alt: "ภาพความทรงจำบทที่ห้า",
      objectPosition: "center 48%",
      objectName: "กล่องดนตรีโบราณ",
      hint: "แตะกล่องดนตรี แล้วฟังโน้ตสามตัว",
    },
    {
      id: 6,
      title: "ทริปด้วยกันครั้งแรก",
      date: "2024",
      story:
        "หลายความรู้สึกในทริปเดียว กลายเป็นอีกหนึ่งทริปที่ชอบมากที่สุดในชีวิต",
      image: "/images/chapter-06.jpg",
      alt: "ภาพความทรงจำปีที่หก",
      objectPosition: "center 43%",
      objectName: "ล็อกเก็ตสีเงิน",
      hint: "แตะล็อกเก็ตที่เก็บแสงของเราไว้",
    },
    {
      id: 7,
      title: "ฉลองวันเกิดให้กัญ",
      date: "2025",
      story:
        "เซอร์ไพรต์วันเกิดให้กัญด้วยไอศกรีมหวานๆ คนให้ก็หวานเช่นกัน",
      image: "/images/chapter-07.jpg",
      alt: "ภาพความทรงจำปีที่เจ็ด",
      objectPosition: "center 47%",
      objectName: "กุญแจแสงจันทร์",
      hint: "แตะกุญแจเพื่อเปิดทางไปสู่ปีต่อไป",
    },
    {
      id: 8,
      title: "คาเฟ่ที่กัญอยากไป",
      date: "2026",
      story:
        "ไปคาเฟ่ด้วยกัน ขี่รถไปในเมืองดูหนังด้วยกัน เป็นอีกหนึ่งวันที่ทำกิจกรรมด้วยกันเยอะมากๆ ใช้เวลาคุ้มสุดๆ",
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
