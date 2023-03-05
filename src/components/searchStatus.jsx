import React from "react";

const SearchStatus = ({ length }) => {
    const renderPhrase = () => {
        let word = "тусанёт с тобой сегодня";
        if (length >= 2 && length <= 4) {
            return " человека " + word;
        } else {
            return " человек " + word;
        }
    };
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += length === 0 ? "bg-danger" : "bg-primary";
        return classes;
    };
    return (
        <div className={getBageClasses()}>
            {length} {renderPhrase()}
        </div>
    );
};

export default SearchStatus;
