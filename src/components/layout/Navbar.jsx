/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (name) => {
    return location.pathname.split("/").slice(1, 2)[0] === name; 
  }

	return (
		<nav className="text-sm font-semibold">
			<ul className="flex justify-center">
				<li>
					<Link
						to={"/"}
						className={`px-6 inline-block ${
							isActive("") && " bg-third text-white"
						} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
					>
						Home
					</Link>{" "}
				</li>
				<li>
					<Link
						to={"/about-nsa"}
						className={`px-6 inline-block ${
							isActive("about-nsa") && " bg-third text-white"
						} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
					>
						About US
					</Link>
				</li>
				<li
					className={`px-6 ${
						false && "bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					Faculty
				</li>
				<li
					className={`px-6 ${
						false && "bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					Administration Departments
				</li>
				<li
					className={`px-6 ${
						false && "bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					Library
				</li>
				<li
					className={`px-6 ${
						false && "bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					Program
				</li>
				<li
					className={`px-6 ${
						false && "bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					Research
				</li>
				<li
					className={`px-6 ${
						false && "bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					International
				</li>
				<li
					className={`px-6 ${
						false && "bg-third text-white"
					} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
				>
					News & Activities
				</li>
				<li>
					<Link
						to={"/contact-us"}
						className={`px-6 inline-block ${
							isActive("contact-us") && "bg-third  text-white"
						} cursor-pointer py-2 rounded-b-lg drop-shadow-md`}
					>
						Contact Us
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
