/** @format */

import React from "react";

const VisionMissionCard = ({
	img = "",
	heading = "",
	desc = "",
	reverse = "",
}) => {
	return (
		<div
			className={`flex items-center justify-center ${
				reverse ? "flex-row-reverse" : "flex-row"
			} vision-mission-card aside_card_desc`}
		>
			<img className="w-1/2" src={img} alt="img" />
			<div className="relative max-w-[600px] h-fit">
				<div
					className={`text-white bg-[#000370] transform px-5 py-6 ${
						reverse
							? "translate-x-6 -translate-y-6"
							: "-translate-x-6 -translate-y-6"
					} z-10`}
				>
					<h2 className="text-xl font-semibold uppercase">{heading}</h2>
					<p dangerouslySetInnerHTML={{ __html: desc }} className="text-sm" />
				</div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[#000370]/40 -z-10"></div>
			</div>
		</div>
	);
};

export default VisionMissionCard;
