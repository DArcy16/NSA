/** @format */

import React, { useEffect, useRef, useState } from "react";

const CustomInput = ({ name, placeholder, setForm}) => {
	const [showTip, setShowTip] = useState(false);

	const inputRef = useRef();

	useEffect(() => {
		const handleUnFocus = (e) => {
			if (inputRef.current !== e.target) {
				setShowTip(false);
			}
		};

		document.addEventListener("click", handleUnFocus);

		return () => document.removeEventListener("click", handleUnFocus);
	}, []);

	return (
		<div className="relative">
			<input
                ref={inputRef}
                onChange={(e) => setForm(prev => ({
                    ...prev,
                    [name] : e.target.value
                }))}
				onFocus={() => setShowTip(true)}
				name={name}
                autoComplete={false}
				type="text"
				placeholder={showTip ? "" : placeholder}
				className="px-3 py-2 w-full text-sm border-[1.5px] border-black"
			/>
			<span className={`${showTip ? "inline-block opacity-100 translate-y-0 " : "hidden opacity-0 translate-y-4"} transition-all duration-300  absolute text-[.6rem] px-1 -top-3 bg-white left-3`}>
				{placeholder}
			</span>
		</div>
	);
};

export default CustomInput;
