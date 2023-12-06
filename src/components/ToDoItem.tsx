import { useEffect, useState } from "react";
import { Item } from "../hooks/useGetItems";
import { useDeleteItem } from "../hooks/useDeleteItem";
import { useUpdateItem } from "../hooks/useUpdateItem";

export const ToDoItem = (props: { item: Item }) => {
  const [checked, setChecked] = useState(props.item.done);
  const { deleteItem } = useDeleteItem();
  const { updateItem } = useUpdateItem();

  useEffect(() => {
    updateItem(props.item.id, checked);
  }, [checked]);

  return (
    <div className="flex items-center">
      <div
        className="mr-2 cursor-pointer"
        onClick={() => deleteItem(props.item.id)}
      >
        X
      </div>
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
