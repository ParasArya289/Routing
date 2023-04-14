import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../component/Card";
import { CardAnswer } from "../component/CardAnswers";
import { DataContext } from "../context/dataContext";
export const Answers = () => {
  const { answerId } = useParams();
  const { data } = useContext(DataContext);
  const findAnswer = data.find(({ id }) => id === +answerId);
  return (
    <div>
      <CardAnswer data={findAnswer} />
    </div>
  );
};
