import React, { useState } from "react";


function Navbar(props) {
    const [current, setCurrent] = useState("mail");

    const handleClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <nav></nav>
    );
}

export default Navbar;
