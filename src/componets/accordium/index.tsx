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
            <div onClick={() => handleSelected(dataItems.id)} className=" cursor-pointer p-4 rounded-lg bg-teal-200 hover:bg-teal-300 transition duration-300 ease-in-out ">
              {dataItems.question}
              <span>+</span>
                {selected === dataItems.id ? (
                  <div className="flex bg-lime-50">{dataItems.answere}</div>
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
