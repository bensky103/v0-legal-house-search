import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "בדק בית Legal - איתור ליקויי בנייה וחוות דעת נגדית",
    short_name: "בדק בית Legal",
    description:
      "מומחה מוסמך לבדיקת ליקויי בנייה וחוות דעת נגדית. בדיקת דירה לפני קנייה, איתור רטיבות ובעיות איטום בכל הארץ.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3B82F6",
    lang: "he",
    dir: "rtl",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  }
}
