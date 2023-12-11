import { ToDoItem } from "../components/ToDoItem";
import { useGetItems } from "../hooks/useGetItems";
import { useAddItem } from "../hooks/useAddItem";
import { useRef } from "react";

export const OpenToDoPage = () => {
  const items = useGetItems();
  const { addItem } = useAddItem();

  const newItemRef = useRef<any>(null);

  return (
    <>
      <div className="mb-4">
        {items.map((item, index) => (
          <ToDoItem
            key={item.id}
            item={item}
            lastItem={index + 1 === items.length}
            newItemRef={newItemRef}
          />
        ))}
      </div>
      <button
        className="btn btn-success btn-sm"
        onClick={() => {
          addItem("", false);
          setTimeout(() => {
            newItemRef?.current?.focus();
          }, 10);
        }}
      >
        Add
      </button>
    </>
  );
};
