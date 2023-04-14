import { NavLink } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <div
      style={{
        minWidth: "450px",
        border: "2px dotted",
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <h3>{data?.question}</h3>
      <NavLink
        style={{
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          backgroundColor: "black",
          padding: "0.9rem"
        }}
        to={`/answers/${data?.id}`}
      >
        Show answers
      </NavLink>
      <button
        style={{
          color: "white",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "black",
          padding: "1rem",
          margin: "12px",
          cursor: "pointer"
        }}
      >
        Upvote
      </button>
      <button
        style={{
          color: "white",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "black",
          padding: "1rem",
          cursor: "pointer"
        }}
      >
        Downvote
      </button>
    </div>
  );
};
