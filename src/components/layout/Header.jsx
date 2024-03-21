/** @format */

import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import logo from "../../assets/img/logo.png";

import { Search, SpeakerPhone } from "../../assets/icons/Icons";

const Header = () => {
	const inputRef = useRef();
    const [focus , setFocus ] = useState(false);

    useEffect(() => {
        const handleUnFocus = (e) => {
            if(inputRef.current !== e.target) {
                setFocus(false)
            }
        }

        document.addEventListener("click", handleUnFocus);

        return () => document.removeEventListener("click", handleUnFocus)
    }, [])


	return (
		<>
			{/* Notice */}
			<div className="flex h-9 bg-primary">
				<div className="rounded-r-full gap-3 text-sm font-semibold text-white flex justify-center items-center h-full w-32 bg-primary_light">
					<SpeakerPhone /> Notice
				</div>
				<div className="w-[calc(100%-7rem)] text-center"></div>
			</div>

			<div className="relative">
				<div className=" flex items-center justify-between bg-secondary px-20 py-2">
					<div className="flex items-center  gap-4">
						<img className="size-20" src={logo} alt="logo" />
						<h2 className="text-2xl uppercase font-semibold text-white">
							Naypyitaw state academy
						</h2>
					</div>
					<div className="flex items-center gap-6">
						<div className="relative flex items-center rounded-full w-[300px] overflow-hidden">
							<input
								ref={inputRef}
								onFocus={() => setFocus(true)}
								type="text"
								className=" text-sm outline-none pl-10 pr-4 py-2 w-full"
								placeholder="Search"
							/>
							<div
								className={`absolute ${
									focus ? "translate-x-[265px]" : " left-0 ml-0.5"
								} bg-primary flex items-center justify-center transition-all duration-300 size-8 text-white rounded-full`}
							>
								<Search />
							</div>
						</div>
						<button className="text-sm text-white font-semibold px-6 py-1 border-2 border-white">
							Login
						</button>
					</div>
				</div>
				<div className="w-full h-1 bg-third"></div>
				<div className="absolute w-full top-full left-0 z-10">
					<Navbar />
				</div>
			</div>
		</>
	);
};

export default Header;
