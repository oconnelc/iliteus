import React, { Component } from "react";
import NavLink from "gatsby-link";

const Overbar = props => {
  return (
    <nav>
      <ul className="overbar__list">
        <li>
          <NavLink
            to="/ilite"
            className="overbar__list-item"
            activeClassName="overbar--underlined"
          >
            About ILITE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/frc"
            className="overbar__list-item"
            activeClassName="overbar--underlined"
          >
            FRC Robotics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/outreach/SummerCamps"
            className="overbar__list-item"
            activeClassName="overbar--underlined"
          >
            Summer Camps
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/outreach"
            activeClassName="overbar--underlined"
            className="overbar__list-item"
          >
            Outreach
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Overbar;
