"use client";

import { useState } from "react";

import apiManager from "@/app/api/apiManager";

export default function Home() {
  const [profileSummary, setProfileSummary] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProfileSummary(event.target.value);
  };

  const handleSavingPdf = async () => {
    try {
      const res = await apiManager.post(
        "/pdf",
        {
          profileSummary,
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
    <>
      <div className="container">
        <textarea value={profileSummary} onChange={handleChange} />
        <button onClick={handleSavingPdf}>PDF 저장하기</button>
      </div>
    </>
  );
}
