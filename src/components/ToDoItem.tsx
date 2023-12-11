import { useEffect, useState } from "react";
import { Item } from "../hooks/useGetItems";
import { useDeleteItem } from "../hooks/useDeleteItem";
import { useUpdateItem } from "../hooks/useUpdateItem";

export const ToDoItem = (props: {
  item: Item;
  lastItem?: boolean;
  newItemRef?: any;
}) => {
  const { deleteItem } = useDeleteItem();
  const { updateItem } = useUpdateItem();

  const [completed, setCompleted] = useState(props.item.done);
  const [content, setContent] = useState(props.item.content);

  useEffect(() => {
    updateItem(props.item.id, completed, content);
  }, [completed, content]);

  const handleInputFocusOut = () => {
    if (content === "") {
      deleteItem(props.item.id);
    }
  };

  return (
    <>
      <div className="flex items-center mb-1">
        <input
          className="mr-2 checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        <input
          ref={props.lastItem ? props.newItemRef : null}
          className="w-full p-1 border-neutral focus:outline-none focus:border-b"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          onBlur={() => handleInputFocusOut()}
        />
      </div>
    </>
  );
};
