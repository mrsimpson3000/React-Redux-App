import React from "react";
import logo from "../images/spacex.png";

export default function Header() {
  return (
    <div>
      <img className='logo bg-primary' src={logo} alt='spacex logo' />
    </div>
  );
}
