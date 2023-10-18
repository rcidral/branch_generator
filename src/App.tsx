import { useState } from "react";
import { slugify } from "transliteration";

const App = () => {
  const [text, setText] = useState("");
  const [com, setCom] = useState("");
  const [dev, setDev] = useState("");
  const [staging, setStaging] = useState("");

  const generateBranch = () => {
    const branch = slugify(text, {
      lowercase: true,
      separator: "_",
    });

    setDev(com + "_" + branch + "_dev");
    setStaging(com + "_" + branch + "_staging");
  };

  return (
    <div className="h-screen w-screen py-32 flex flex-col justify-start items-center gap-6 bg-[#282C34] text-zinc-50">
      <h1 className="text-2xl font-semibold uppercase">
        Gerador de Branch Compras
      </h1>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="branch" className="text-md font-semibold uppercase">
            COM
          </label>
          <input
            type="text"
            className="w-[200px] p-2 rounded-md bg-transparent outline-none border border-zinc-50"
            value={com}
            onChange={(e) => setCom(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="branch" className="text-md font-semibold uppercase">
            Descrição
          </label>
          <textarea
            className="w-[200px] md:w-[400px] p-2 rounded-md bg-transparent outline-none border border-zinc-50"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button
          className="w-[100px] px-2 py-1 rounded-md font-semibold uppercase border border-zinc-50 bg-transparent hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-300"
          onClick={generateBranch}
        >
          Gerar
        </button>
      </div>
      {dev && (
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="w-[200px] md:w-[600px] md:h-[40px] p-2 rounded-md bg-zinc-50 text-[#282C34]">
            {dev}
          </p>
          <p className="w-[200px] md:w-[600px] md:h-[40px] p-2 rounded-md bg-zinc-50 text-[#282C34]">
            {staging}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
