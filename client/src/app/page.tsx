"use client";

import Image from "next/image";
import axios from "axios";
const ReactDOMServer = require("react-dom/server");

export default function Home() {
  const handlePdfConvert = async () => {
    const htmlString = ReactDOMServer.renderToString(<Home />);
    try {
      const response = await axios.post("http://localhost:3000/pdf", {
        html: htmlString,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <a href="http://naver.com">네이버</a>
      <p style={{ color: "#ff0000" }}>
        내 이름은 승운송, 글로벌 기업의 인재로 거듭나고 있지.
      </p>

      <button onClick={handlePdfConvert}>PDF 변환하기 </button>
    </>
  );
}
