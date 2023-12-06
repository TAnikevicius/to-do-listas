import { ToDoItem } from "../components/ToDoItem";
import { useGetItems } from "../hooks/useGetItems";
import { useAddItem } from "../hooks/useAddItem";
import { useEffect, useState } from "react";

export const OpenToDo = () => {
  const items = useGetItems();
  const { addItem, success } = useAddItem();

  const [addItemContent, setAddItemContent] = useState("");

  useEffect(() => {
    if (success) {
      setAddItemContent("");
    }
  }, [success]);

  return (
    <>
      <div className="flex">
        <input
          className="border mr-2"
          type="text"
          value={addItemContent}
          onChange={(event) => setAddItemContent(event.target.value)}
        />
        <button
          className="pointer"
          onClick={() => addItemContent && addItem(addItemContent, false)}
        >
          Add
        </button>
      </div>
      <div>
        {items.map((item) => (
          <ToDoItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
