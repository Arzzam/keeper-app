import React from "react";

const cr = "Copyright ⓒ ";
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>
        {cr}
        {year}
      </p>
    </footer>
  );
}

export default Footer;
