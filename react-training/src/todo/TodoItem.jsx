import { useState } from "react";
import { BsTrash } from "react-icons/bs";

export const TodoItem = ({ title, id, completed }) => {
  const [checked, setChekced] = useState(completed);

  const cls = ["completed"];
  if (checked) {
    cls.push("completed");
  }

  return (
    <li className={cls.join("")}>
    {/* <li className="line-through"> */}
      <label className="flex justify-between items-center w-100 h-12 bg-gray-100 my-1 px-5">
        <input
          type="checkbox"
          // defaultChecked={false}
          className="cursor-pointer"
          checked={checked}
          onChange={() => setChekced(!checked)}
        />
        <span>{title}</span>
        <BsTrash className=" text-gray-500 hover:text-gray-400 cursor-pointer" />
      </label>
    </li>
  );
};
