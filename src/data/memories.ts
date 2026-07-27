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
      title: "ปีที่เรื่องราวของเราเริ่มต้น",
      date: "ปีที่ 1 ของเรา · [ใส่ปี]",
      story:
        "ปีแรกคือจุดเริ่มต้นของเรื่องราวที่ฉันไม่เคยรู้ว่าจะงดงามได้ขนาดนี้ จากวันธรรมดาวันหนึ่ง เราค่อย ๆ กลายเป็นคนสำคัญของกันและกัน",
      image: "/images/chapter-01.jpg",
      alt: "ภาพความทรงจำบทที่หนึ่ง",
      objectPosition: "center 42%",
      objectName: "ขนนกสีขาว",
      hint: "แตะขนนกที่สว่างที่สุด",
    },
    {
      id: 2,
      title: "ปีแห่งรอยยิ้มที่คุ้นเคย",
      date: "ปีที่ 2 ของเรา · [ใส่ปี]",
      story:
        "ในปีที่สอง เราเริ่มมีเรื่องเล็ก ๆ ที่เข้าใจกันเพียงสองคน และรอยยิ้มของเธอก็ค่อย ๆ กลายเป็นสิ่งที่ทำให้ทุกวันของฉันดีขึ้น",
      image: "/images/chapter-02.jpg",
      alt: "ภาพความทรงจำบทที่สอง",
      objectPosition: "center 38%",
      objectName: "ดอกไม้จันทรา",
      hint: "แตะหิ่งห้อยให้ครบ แล้วดอกไม้จะผลิบาน",
    },
    {
      id: 3,
      title: "ปีที่เราเติบโตไปด้วยกัน",
      date: "ปีที่ 3 ของเรา · [ใส่ปี]",
      story:
        "เราเรียนรู้ทั้งความเหมือนและความต่าง เรียนรู้ที่จะรับฟัง ให้อภัย และจับมือกันแน่นกว่าเดิมในวันที่โลกไม่เป็นใจ",
      image: "/images/chapter-03.jpg",
      alt: "ภาพความทรงจำบทที่สาม",
      objectPosition: "center 50%",
      objectName: "ผลึกใส",
      hint: "ปัดหมอกออก เพื่อเผยสิ่งที่ซ่อนอยู่",
    },
    {
      id: 4,
      title: "ปีของวันธรรมดาที่แสนพิเศษ",
      date: "ปีที่ 4 ของเรา · [ใส่ปี]",
      story:
        "ปีนี้ทำให้ฉันรู้ว่า ความสุขไม่ได้ต้องเป็นเรื่องใหญ่เสมอไป แค่ได้กินข้าว หัวเราะ และกลับมาเล่าเรื่องของวันนั้นให้เธอฟังก็พิเศษแล้ว",
      image: "/images/chapter-04.jpg",
      alt: "ภาพความทรงจำบทที่สี่",
      objectPosition: "center 44%",
      objectName: "หน้ากระดาษเก่า",
      hint: "แตะหน้ากระดาษที่ติดอยู่ใต้รากไม้",
    },
    {
      id: 5,
      title: "ปีที่ความรักกลายเป็นบ้าน",
      date: "ปีที่ 5 ของเรา · [ใส่ปี]",
      story:
        "เมื่อผ่านมาถึงปีที่ห้า ฉันเพิ่งรู้ว่าความสบายใจมีหน้าตาเหมือนเธอ และคำว่าบ้านไม่จำเป็นต้องเป็นสถานที่เสมอไป",
      image: "/images/chapter-05.jpg",
      alt: "ภาพความทรงจำบทที่ห้า",
      objectPosition: "center 48%",
      objectName: "กล่องดนตรีโบราณ",
      hint: "แตะกล่องดนตรี แล้วฟังโน้ตสามตัว",
    },
    {
      id: 6,
      title: "ปีที่เราไม่ปล่อยมือกัน",
      date: "ปีที่ 6 ของเรา · [ใส่ปี]",
      story:
        "มีทั้งวันที่ง่ายและวันที่ยาก แต่เรายังคงเลือกกันและกันเสมอ ปีนี้จึงเป็นเครื่องเตือนใจว่าเราผ่านมาได้ไกลแค่ไหน",
      image: "/images/chapter-06.jpg",
      alt: "ภาพความทรงจำปีที่หก",
      objectPosition: "center 43%",
      objectName: "ล็อกเก็ตสีเงิน",
      hint: "แตะล็อกเก็ตที่เก็บแสงของเราไว้",
    },
    {
      id: 7,
      title: "ปีแห่งความฝันร่วมกัน",
      date: "ปีที่ 7 ของเรา · [ใส่ปี]",
      story:
        "จากความฝันของคนสองคน เราเริ่มมองเห็นภาพวันข้างหน้าที่มีคำว่าเราอยู่ในนั้นชัดเจนขึ้นทุกที",
      image: "/images/chapter-07.jpg",
      alt: "ภาพความทรงจำปีที่เจ็ด",
      objectPosition: "center 47%",
      objectName: "กุญแจแสงจันทร์",
      hint: "แตะกุญแจเพื่อเปิดทางไปสู่ปีต่อไป",
    },
    {
      id: 8,
      title: "ปีที่แปด และเรื่องราวที่ยังดำเนินต่อ",
      date: "ปีนี้ · ปีที่ 8 ของเรา",
      story:
        "แปดปีผ่านไป แต่ฉันยังอยากสร้างวันธรรมดาและความทรงจำใหม่ ๆ กับเธออีกนับไม่ถ้วน เพราะบทที่ฉันชอบที่สุดยังคงเป็นบทที่มีเธอ",
      image: "/images/chapter-08.jpg",
      alt: "ภาพความทรงจำปีที่แปด",
      objectPosition: "center 45%",
      objectName: "นาฬิกาทรายดวงดาว",
      hint: "แตะนาฬิกาทราย เพื่อเก็บปีที่แปดของเรา",
    },
  ] satisfies MemoryChapter[],
  finale: {
    lines: [
      "ตลอด 8 ปีที่ผ่านมา",
      "เราเติบโต เปลี่ยนแปลง และเดินข้างกัน",
      "ทุกปีที่มีเธอ คือความทรงจำที่ฉันอยากเก็บไว้",
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
    "ขอบคุณสำหรับเรื่องราวตลอด 8 ปีของเรา",
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
