import { createContext, useContext, useEffect, useState } from "react";

const ListContext = createContext();
const ListProvider = ({ children }) => {
  const localList = JSON.parse(localStorage.getItem("list"));
  const [list, setList] = useState(
    localList || { quick: [], today: [], backlog: [], completed: [] }
  );
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  console.log(list);
  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};
export const useListContext = () => useContext(ListContext);
export default ListProvider;
