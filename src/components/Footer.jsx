import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-red-600">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
