import React from "react";
import Link from "next/link";

export const NavLink = ({ children, href, color = "white" }) => (
  <Link href={href}>
    <a
      className={`text-md text-${color} px-4 py-2  font-semibold uppercase bg-indigo-700 mr-2 last:mr-0 rounded-full`}
    >
      {children}
    </a>
  </Link>
);
