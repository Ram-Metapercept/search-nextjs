import Link from "next/link";
import React from "react";

function MakeYourChoice() {
  return (
    <div className="makeYourChoice formWrapper">
      <p>Make your choice.</p>
      <Link href={"tel:78451201"}>
        <div>
          <i className="fa-solid fa-phone mr-5"></i>
          <span>Call Us</span>
        </div>
      </Link>
      <Link
        href={"https://api.whatsapp.com/send?phone=705891&text=Hi"}
        target="_blank"
      >
        <div>
          <i className="fa-brands fa-whatsapp mr-5"></i>
          <span>Whatsapp Us</span>
        </div>
      </Link>
    </div>
  );
}

export default MakeYourChoice;
