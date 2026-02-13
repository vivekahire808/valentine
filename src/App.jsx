import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "नाही रे!",
      "पक्का का?",
      "खरंच पक्का का?",
      
      
      "तुझ्या नाकावरचा राग खूप क्युट दिसतो 😌💖",
      "अगं वेडी आहेस का?",
      "इतकं प्रेम मिळतंय तरी नाही म्हणतेस",
      "तुझ्या हट्टीपणावरही मी already crush आहे गं 🥰",
      "इतकी गोड असून पण हट्टीपणा जास्तच आहे तुझा 😏",
      "काय ग बाई, एवढं भाव खायचं नसतं 😄",
      "नखरे चालतात, पण ‘हो’ म्हणायचंच असतं 😜",
      "अरे देवा, ‘नाही’ म्हणताना पण इतकी गोड कशी दिसतेस तू 😍",
      "नाही’ म्हणताना पण इतकी क्युट… unfair आहे हे 😄",
      "थोडं भाव खा, पण एवढं नाही गं 😂",
      "हा proposal aahe ,rejection box नाही गं 😆",
      "इतकं प्रेम समोर असून पण attitude चालूच आहे 😄❤️",
      "एकदा हो म्हण… screenshot घेऊन ठेवायचंय 😆📸",
      "असं असेल तर मग earrings नाही मिळणार बघ 😏✨",
      "चल आता हट्टीपणा सोड… Valentine तर मीच आहे 😄💘",
      "एवढं झालंय तर kiss देऊनच टाक 😜💋",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
