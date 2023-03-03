import React from "react";

import SearchStatus from "./searchStatus";
import User from "./user";

const Users = ({ users, ...rest }) => {
  return (
    <>
      <SearchStatus length={users.length} />
      <table className="table">
        {users.length === 0 ? (
          ""
        ) : (
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, кол. раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранные</th>
              <th scope="col">Удалить</th>
            </tr>
          </thead>
        )}

        <tbody>
          {users.map((user) => (
            <User key={user._id} {...rest} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
