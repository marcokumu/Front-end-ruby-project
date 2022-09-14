import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="div-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link to="/" className="h2">Pokemon</Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link to="/pokemon" className="btn">
              Poke
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
