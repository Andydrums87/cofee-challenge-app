import React from "react";
import Image from "../images/MyImage.jpg"

function Header() {
    return (
        <header className="img__container">
            <img src={Image} alt="image" className="header__img" />
        </header>
    )

}

export default Header;