/** @format */

import React from "react";

import avatar from "../../assets/img/avatar.png";

const Main = ({ data }) => {
	return (
		<div className="space-y-3">
			<img
				className="size-28"
				src={data.home.head_photo || avatar}
				alt="logo"
			/>
			<div className="">
				<h3 className="body-font text-lg font-semibold">
					{data.home.head_name || "Dr. Nwe Nwe"}
				</h3>
				<p className="text-sm">
					({data.home.head_place || "Naypyitaw state academy"})
				</p>
			</div>
			<div className="space-y-2">
				<p className="font-semibold text-sm">
					{data.home.head_message || "Rector's Message"}
				</p>
				<div className="w-12 h-0.5 bg-black"></div>
				{data.home.head_description ? (
					<div
						dangerouslySetInnerHTML={{ __html: data.home.head_description }}
						className="text-justify text-sm"
					></div>
				) : (
					<p className="text-justify text-sm">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
						voluptatum quis quisquam corporis expedita aliquid hic sint porro
						fuga dolorum error ab at reiciendis obcaecati quasi alias pariatur
						ad aut laboriosam minus cupiditate repellat in! Dolorum placeat
						laboriosam, neque facere et vero expedita ullam. Consequuntur
						delectus voluptate earum eius in obcaecati, vel nemo deleniti, porro
						architecto quae commodi quibusdam velit! Quaerat velit facilis quia
						commodi a sint at dolorem totam quas natus officiis, laboriosam
						soluta optio quo consequuntur earum ipsam rem adipisci, corrupti
						voluptates nam quidem tempora. Mollitia repellat minima eveniet
						tempora adipisci saepe quisquam possimus sequi beatae necessitatibus
						sunt quasi inventore exercitationem consequatur soluta vitae, ut
						laborum accusamus placeat quo rerum ab similique. Repellendus
						eveniet autem vitae tempora fugit amet obcaecati non harum
						reprehenderit! Quia deleniti corrupti molestiae perferendis quae
						dolor facilis aut delectus perspiciatis quasi aliquam, nemo cum
						molestias error, optio iste eligendi non asperiores obcaecati ut. Ea
						architecto ab eos, dolor ut consequatur natus tempora? Nemo qui
						impedit cum fugiat deleniti molestiae cupiditate similique rem
						dignissimos itaque, quisquam voluptas vel ea optio? Tenetur corporis
						ipsum ducimus consequuntur harum distinctio quasi non, dolorum
						molestiae sint rerum iure aperiam dicta, tempora perspiciatis natus
						quia a explicabo. Vel, porro facilis?
					</p>
				)}
			</div>
		</div>
	);
};

export default Main;
