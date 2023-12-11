import { ToDoItem } from "../components/ToDoItem";
import { useGetFinishedItems } from "../hooks/useGetFinishedItems";

export const FinishedToDoPage = () => {
  const items = useGetFinishedItems();

  return (
    <div>
      <div>
        {items.map((item) => (
          <ToDoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
