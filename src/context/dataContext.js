import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../utils/utils";

export const DataContext = createContext();

export const DataContextProvder = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/questions");
        const {
          data: { questions }
        } = res;
        setData(questions);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
