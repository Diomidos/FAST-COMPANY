import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    // console.log(users, "Стейт");
    //   console.log(setUsers, "фунцкия позволяющая изменять наш Стейт");
    const hendeleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const switchingBookmark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        <Users
            users={users}
            onDelete={hendeleDelete}
            onBookmark={switchingBookmark}
        />
    );
};

export default App;
