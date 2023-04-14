import { useContext } from "react";
import { Card } from "../component/Card";
import { DataContext } from "../context/dataContext";

export const Questions = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      {data.map((el) => (
        <Card data={el} />
      ))}
    </div>
  );
};
