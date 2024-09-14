import { useEffect, useState } from "react";

type colorType = "hex" | "rgb";
const Randomcolor: React.FC = () => {
  const [typeOfColor, setType] = useState<colorType>("hex");
  const [color, setColor] = useState<string>("#000000");
  useEffect(() => {
    typeOfColor === "rgb" ? handleCreateRgbRandom() : handleCreateHexRandom();
  }, [typeOfColor]);
  const randomColorUtility = (len: number): number => {
    return Math.floor(Math.random() * len);
  };
  const handleCreateHexRandom = (): void => {
    const hex: Array<number | string> = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexcolor);
  };
  const handleCreateRgbRandom = (): void => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  return (
    <div
      className="flex justify-center w-full h-screen gap-2"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col gap-2">
        <button
          className="py-2 px-4 bg-gray-200"
          onClick={() => setType("hex")}
        >
          Hex color
        </button>
        <button
          className="py-2 px-4 bg-gray-200"
          onClick={() => setType("rgb")}
        >
          Rgb color
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white"
          onClick={() =>
            typeOfColor === "hex"
              ? handleCreateHexRandom()
              : handleCreateRgbRandom()
          }
        >
          Generate Random Color
        </button>
        <div className="flex justify-center items-center flex-col font-extrabold">
          <h3>{typeOfColor === "rgb" ? "RGB" : "HEX"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
};

export default Randomcolor;
