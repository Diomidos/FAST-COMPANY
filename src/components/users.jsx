import React, { useState } from "react";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import User from "./user";
import api from "../api";
import { paginate } from "./utils/paginate";
import GroupList from "./groupList";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const handleProfessionsSelect = (params) => {
        console.log(params);
    };
    console.log(professions);

    const [currentPage, setCurrentPage] = useState(1);
    const [professions] = useState(api.professions.fetchAll());
    const handlePageChange = (pageIndex) => {
        console.log("page:", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            <GroupList
                items={professions}
                onItemSelect={handleProfessionsSelect}
            />
            <SearchStatus length={users.length} />
            <table className="table">
                {count > 0 && (
                    //   ""
                    // ) : (
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
                    {userCrop.map((user) => (
                        <User key={user._id} {...rest} {...user} />
                    ))}
                </tbody>
            </table>
            <Pagination
                itemCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Users;
