"use client";

import Image from "next/image";

export default function Home() {
  const open_pdf_link = () => {
    const url =
      "https://drive.google.com/file/d/1W7haAlLqCj2OTBjK5F8b7hBPi4KGBiHt/view?usp=drive_link";
    if ($_isAndroid()) {
      console.log("is Android");
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", "yakkan_senshin.pdf");
      a.click();
    } else {
      console.log("not android");
      window.open(url);
    }
    // newtab.document.title = "pdf";
    // newtab.location =
    //   "file:///G:/%E3%83%9E%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96/LLM3/PDFtoText/yakkan_senshin.pdf";
  };

  const $_isAndroid = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    console.log("userAgent:", userAgent);
    return userAgent.indexOf("android") !== -1;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={open_pdf_link}>TEST</button>
    </main>
  );
}
