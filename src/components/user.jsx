import React from "react";
import Boockmark from "./bookmark";
import Qualitie from "./qualitie";
const User = ({
  _id,
  name,
  profession,
  completedMeetings,
  rate,
  qualities,
  onDelete,
  onBookmark,
  bookmark,
}) => {
  return (
    <>
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((quality) => (
            <Qualitie
              color={quality.color}
              name={quality.name}
              key={quality._id}
            />
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}</td>
        <td>
          <Boockmark status={bookmark} onClick={() => onBookmark(_id)} />
        </td>
        <td>
          <button onClick={() => onDelete(_id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
