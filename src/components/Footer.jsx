import React from "react";

const cr = "Copyright ⓒ ";
const year = new Date().getFullYear();
const name = "Made By Nafil Arzzam";

function Footer() {
  return (
    <footer>
    <p> {name} </p>
      <p>
        {cr}
        {year}
      </p>
    </footer>
  );
}

export default Footer;
