import React from "react";
import Logo from "../images/selo-fipe.png";

export default function Header() {
  return (
    <div className="text-center p-3 bg-secondary">
      <img style={{ maxWidth: "6rem" }} src={Logo} alt="Logo" />
    </div>
  );
}
