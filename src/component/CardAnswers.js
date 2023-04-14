// import { NavLink } from "react-router-dom";

export const CardAnswer = ({ data }) => {
  return (
    <div
      style={{
        minWidth: "450px",
        border: "2px dotted",
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <h3>{data?.answer}</h3>
    </div>
  );
};
