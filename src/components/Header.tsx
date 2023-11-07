import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const NavLink = (props: { route: string; label: string }) => {
  const location = useLocation();

  return (
    <Link
      className={classNames(
        "p-2 ml-2",
        location?.pathname === props.route && "text-red-500",
      )}
      to={props.route}
    >
      {props.label}
    </Link>
  );
};

export const Header = () => {
  return (
    <div className="border-b sm:px-6 lg:px-8 max-w-7xl">
      <nav className="flex justify-end">
        <NavLink route="/" label="Home" />
        <NavLink route="/finished" label="Finished" />
      </nav>
    </div>
  );
};
