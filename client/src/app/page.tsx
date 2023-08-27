"use client";

import { useState } from "react";

import apiManager from "@/app/api/apiManager";

export default function Home() {
  const [profileSummary, setProfileSummary] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProfileSummary(event.target.value);
  };

  const sendHtml = async () => {
    try {
      const res = await apiManager.post(
        "/pdf",
        {
          html: document.getElementById("jasong")?.outerHTML,
        },
        {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/pdf",
          },
        }
      );

      // console.log(res);

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <textarea value={profileSummary} onChange={handleChange} />
      <button onClick={sendHtml}>HTML 전송하기</button>
      <h1 id="jasong" className="text-sky-500">
        안녕하세요
      </h1>
    </div>
  );
}
