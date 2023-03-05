import { noConflict } from "lodash";
import React, { useState } from "react";
import Pagination from "./pagination";

import SearchStatus from "./searchStatus";
import User from "./user";
import { paginate } from "./utils/paginate";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log("page:", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
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
