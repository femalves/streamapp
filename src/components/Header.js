import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        MyTV
      </Link>
      <Link to="/" className="item active">
        Streams
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
