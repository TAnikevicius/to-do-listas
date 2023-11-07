import { Item } from "../pages/OpenToDo";
import { useState } from "react";

export const ToDoItem = (props: { item: Item }) => {
  const [checked, setChecked] = useState(props.item.done);

  return (
    <div className="flex items-center">
      <input
        className="mr-2"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div>{props.item.content}</div>
    </div>
  );
};
