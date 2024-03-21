/** @format */

import React from "react";

const VisionMissionCard = ({ img = "", heading = "", desc = "", reverse = "" }) => {
	return (
		<div
			className={`flex items-center justify-center ${
				reverse ? "flex-row-reverse" : "flex-row"
			}`}
		>
			<img className="w-1/2" src={img} alt="img" />
			<div className="relative max-w-[600px] h-fit">
				<div
					className={`text-white bg_gradient1 transform px-5 py-6 ${
						reverse
							? "translate-x-6 -translate-y-6"
							: "-translate-x-6 -translate-y-6"
					} z-10`}
				>
					<h2 className="text-xl font-semibold uppercase">{heading}</h2>
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est
						molestias dolores cumque. Fugiat repellendus eveniet blanditiis quae
						veritatis doloremque eaque, ducimus corrupti dolor non, asperiores
						neque nihil. Soluta, quos? Enim non debitis dolor reiciendis quod
						commodi cumque fuga voluptatum harum officiis, illo iure accusamus
						molestiae ut exercitationem suscipit rerum fugiat tempora adipisci
						dolorem esse. Voluptatem aut sapiente placeat totam dolorem neque
						architecto ea provident quae, ex aliquid qui officia corrupti quasi.
						Quos esse laborum cum blanditiis, dolorem facilis! Quaerat.
					</p>
				</div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-third/40 -z-10"></div>
			</div>
		</div>
	);
};

export default VisionMissionCard;
