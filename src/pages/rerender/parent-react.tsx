import { useState } from "react";
import { ChildReact } from "./child-react";

export const ParentReact = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="bg-slate-100 p-4 rounded-lg">
      <h3 className="text-xl mb-2">親コンポーネント</h3>

      <div className="flex items-center gap-2 mb-4">
        <button
          className="p-2 bg-gray-300 shadow-sm hover:bg-gray-300/80 rounded-md"
          onClick={increment}
        >
          Increment
        </button>
        Count: {count}
      </div>

      <div className="m-4">
        <ChildReact />
      </div>
    </div>
  );
};
