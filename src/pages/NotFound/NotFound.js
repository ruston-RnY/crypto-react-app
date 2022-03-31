import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div>
      <section className="container not-found">
        <div className="not-found-content">
          <h2 className="head-text">Opps, Page Not Found</h2>
          <p className="not-found-text">
            This page is under development, you can try visit
          </p>
          <Link to={"/"} className="btn btn-not-found">
            Home
          </Link>
        </div>
      </section>
    </div>
  );
};
