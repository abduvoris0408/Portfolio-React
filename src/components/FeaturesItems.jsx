import React from "react";

const FeaturesItems = ({ name, icon, link = "" }) => {
    return (
        <li>
            <a className="flex items-center gap-2 cursor-pointer" href={link}>
                {icon}
                <p>{name}</p>
            </a>
        </li>
    );
};

export default FeaturesItems;
