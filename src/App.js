import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
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
            users.filter((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                    return user;
                }
                return user;
            })
        );
        return (
            <div>
                <SearchStatus length={users.lengt} />
                <Users
                    users={users}
                    onDelete={hendeleDelete}
                    onBookmark={switchingBookmark}
                />
            </div>
        );
    };
};
export default App;
