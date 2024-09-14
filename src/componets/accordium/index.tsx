import { useState } from "react";
import data from "./data";

const Accordium = () => {
  const [selected, setSelected] = useState<number | null>(null); // single selection approach
  // multi selection approach
  const [enablemultiple, setEnableMultiple] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<number[]>([]);
  //single selection function
  function handleSelected(getSelectionId: number) {
    setSelected(getSelectionId === selected ? null : getSelectionId);
  }
  //multi slection function
  function handleMultiSelected(getSelectionId: number) {
    const cpymulti: number[] | null = [...multiple];
    const findIndex = cpymulti.indexOf(getSelectionId);
    findIndex === -1
      ? cpymulti.push(getSelectionId)
      : cpymulti.splice(findIndex, 1);
    setMultiple(cpymulti);
  }

  return (
    <div className="flex justify-center items-center w-full h-screen gap-12">
      <div className="w-1/4 space-y-4">
        <button
          className="flex my-3 py-2 px-4 bg-zinc-400 font-bold text-white rounded-l hover:bg-zinc-500"
          onClick={() => {
            setEnableMultiple(!enablemultiple);
          }}
        >
        { enablemultiple? "Enable Single Selection": "Enable Multi Selection"}
        </button>
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div
              onClick={() =>
                enablemultiple
                  ? handleMultiSelected(dataItems.id)
                  : handleSelected(dataItems.id)
              }
              className="cursor-pointer p-4 rounded-lg bg-teal-200 hover:bg-teal-300 transition duration-300 ease-in-out "
            >
              <div className="flex justify-between items-center font-semibold">
                {dataItems.question}
                <span>+</span>
              </div>
              {selected === dataItems.id ||
              multiple.indexOf(dataItems.id) !== -1 ? (
                <div className="mt-4 p-4 bg-lime-50 rounded-md border border-teal-400 transition-opacity duration-300 ease-in-out">
                  {dataItems.answere}
                </div>
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
