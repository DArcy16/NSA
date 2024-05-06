/** @format */

import React from "react";

const Loading = () => {
	return (
		<div className="w-full h-96 flex items-center justify-center">
			<svg
				class="animate-bounce h-5 w-5 bg-gray-200 rounded-full"
				viewBox="0 0 24 24"
			></svg>
			<svg
                style={{animationDelay: ".25s"}}
				class="animate-bounce transition ml-3  h-5 w-5 bg-gray-200 rounded-full"
				viewBox="0 0 24 24"
			></svg>
			<svg    
            style={{animationDelay: ".5s"}}
				class="animate-bounce ml-3  h-5 w-5 bg-gray-200 rounded-full"
				viewBox="0 0 24 24"
			></svg>
		</div>
	);
};

export default Loading;
