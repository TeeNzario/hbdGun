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
  recipientName: "[ชื่อแฟน]",
  opening: {
    prelude: "There is something waiting for you.",
    soundNote: "เสียงจะทำให้เรื่องราวสมบูรณ์ขึ้น",
    forestLine: "คืนนี้ ป่าแห่งนี้กำลังรอเธออยู่",
  },
  chapters: [
    {
      id: 1,
      title: "วันที่เรื่องราวเริ่มต้น",
      date: "14 กุมภาพันธ์ 2024",
      story:
        "วันนั้นดูเหมือนจะเป็นวันธรรมดาวันหนึ่ง แต่หลังจากได้พบเธอ มันก็กลายเป็นวันที่ฉันอยากจดจำเสมอ",
      image: "/images/chapter-01.jpg",
      alt: "ภาพความทรงจำบทที่หนึ่ง",
      objectPosition: "center 42%",
      objectName: "ขนนกสีขาว",
      hint: "แตะขนนกที่สว่างที่สุด",
    },
    {
      id: 2,
      title: "รอยยิ้มที่ยังจำได้",
      date: "3 มีนาคม 2024",
      story:
        "ฉันจำไม่ได้ทุกคำที่เราพูด แต่ยังจำได้ชัดเจนว่าเธอทำให้วันนั้นมีความสุขแค่ไหน",
      image: "/images/chapter-02.jpg",
      alt: "ภาพความทรงจำบทที่สอง",
      objectPosition: "center 38%",
      objectName: "ดอกไม้จันทรา",
      hint: "แตะหิ่งห้อยให้ครบ แล้วดอกไม้จะผลิบาน",
    },
    {
      id: 3,
      title: "วันที่โลกเงียบลง",
      date: "21 มิถุนายน 2024",
      story:
        "ท่ามกลางผู้คนมากมาย ช่วงเวลาที่ได้อยู่ข้างเธอกลับทำให้ทุกอย่างรอบตัวเงียบลงอย่างน่าประหลาด",
      image: "/images/chapter-03.jpg",
      alt: "ภาพความทรงจำบทที่สาม",
      objectPosition: "center 50%",
      objectName: "ผลึกใส",
      hint: "ปัดหมอกออก เพื่อเผยสิ่งที่ซ่อนอยู่",
    },
    {
      id: 4,
      title: "ช่วงเวลาธรรมดาที่พิเศษ",
      date: "9 กันยายน 2024",
      story:
        "บางความทรงจำไม่ได้เกิดจากเรื่องยิ่งใหญ่ แต่มาจากวันที่เราได้หัวเราะด้วยกันโดยไม่ต้องพยายาม",
      image: "/images/chapter-04.jpg",
      alt: "ภาพความทรงจำบทที่สี่",
      objectPosition: "center 44%",
      objectName: "หน้ากระดาษเก่า",
      hint: "แตะหน้ากระดาษที่ติดอยู่ใต้รากไม้",
    },
    {
      id: 5,
      title: "ความทรงจำที่ฉันชอบที่สุด",
      date: "1 มกราคม 2025",
      story:
        "เมื่อมองย้อนกลับไป ฉันเพิ่งรู้ว่าทุกช่วงเวลาที่มีเธอค่อย ๆ กลายเป็นส่วนที่ดีที่สุดของเรื่องราวนี้",
      image: "/images/chapter-05.jpg",
      alt: "ภาพความทรงจำบทที่ห้า",
      objectPosition: "center 48%",
      objectName: "กล่องดนตรีโบราณ",
      hint: "แตะกล่องดนตรี แล้วฟังโน้ตสามตัว",
    },
  ] satisfies MemoryChapter[],
  finale: {
    lines: [
      "เวลาอาจเปลี่ยนแปลงหลายสิ่ง",
      "แต่ทุกช่วงเวลาที่มีเธอ",
      "กลายเป็นความทรงจำที่ฉันชอบที่สุด",
    ],
    birthday: "สุขสันต์วันเกิดนะ",
    button: "มีอีกอย่างที่อยากให้เธอดู",
  },
  video: {
    src: "/media/birthday-message.mp4",
    poster: "/images/video-poster.jpg",
    captions: "/media/birthday-message-th.vtt",
  },
  closing: [
    "ขอบคุณที่เดินเข้ามาเป็นส่วนหนึ่งของความทรงจำเหล่านี้",
    "และขอบคุณที่เกิดมานะ",
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
