import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export const useDeleteItem = () => {
  const deleteItem = (id: string) => {
    const docRef = doc(db, "items", id);

    deleteDoc(docRef);
  };

  return { deleteItem };
};
