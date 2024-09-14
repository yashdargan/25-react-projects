import { useState } from "react";
import data from "./data";

const Accordium = () => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelected(getSelectionId: number) {
    console.log(getSelectionId);
    setSelected(getSelectionId === selected ? null : getSelectionId);
  }

  return (
    <div className="flex justify-center items-center w-full h-screen gap-12">
      <div className="w-1/4 space-y-4">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div
              onClick={() => handleSelected(dataItems.id)}
              className="cursor-pointer p-4 rounded-lg bg-teal-200 hover:bg-teal-300 transition duration-300 ease-in-out "
            >
              <div className="flex justify-between items-center font-semibold">
              {dataItems.question}
              <span>+</span>
              </div>
              {selected === dataItems.id ? (
                <div className="mt-4 p-4 bg-lime-50 rounded-md border border-teal-400 transition-opacity duration-300 ease-in-out">{dataItems.answere}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>data not founded</div>
        )}
      </div>
    </div>
  );
};

export default Accordium;
