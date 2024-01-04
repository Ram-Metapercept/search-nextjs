import React from "react";

function Header() {
  return (
    <div className="salesHeader">
      <div className="">
        <p>Chat with our bot</p>
        <span>Online</span> <i className="fa-solid fa-circle online ml-2"></i>
      </div>
      <i className="fa-regular fa-comments circular"></i>
    </div>
  );
}

export default Header;
