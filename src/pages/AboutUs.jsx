/** @format */

import React from "react";

import sliderImg2 from "../assets/img/slider2.png";
import sliderImg3 from "../assets/img/slider3.png";
import VisionMissionCard from "../components/aboutus/VisionMissionCard";

const AboutUs = () => {
	return (
		<div>
			<div className="h-[356px] bg_filler flex bg-white justify-center items-center">
				<h2 className="text-3xl font-semibold text-white">About NSA</h2>
			</div>
			<div className="section_padding2 flex items-center gap-6">
				<img className="w-1/2" src={sliderImg2} alt="photo" />
				<div className="h-fit ">
					<span className="font-semibold">About Us</span>
					<h2 className="text-2xl font-bold">Naypyitaw State Academy</h2>
					<p className="text-justify text-sm mt-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
						amet fuga omnis eum in quia, quos illum maiores quisquam nulla odit
						ab adipisci dicta itaque quod sequi reiciendis quis incidunt
						doloribus repudiandae sit eos cupiditate repellendus earum! Tempore
						eius, nobis recusandae repellat placeat, temporibus, perspiciatis
						magni nesciunt harum soluta qui repudiandae sint explicabo? Rerum at
						cupiditate magnam asperiores maxime similique et dolorum pariatur
						inventore laboriosam quod illo nostrum deserunt doloribus tenetur,
						nisi, commodi consequuntur, necessitatibus expedita in! Iusto est,
						labore officia laborum reprehenderit quasi. Maiores labore, officia
						fugit neque maxime adipisci non at voluptas corporis quisquam eum?
						boriosam suscipit temporibus, assumenda est cum molestiae, excepturi
						quaerat ducimus laudantium! Temporibus a repellat delectus hic nihil
						quibusdam aut soluta cumque alias voluptate, libero ducimus!
						Expedita dicta explicabo cum reiciendis, veritatis nihil, aperiam
						deleniti optio maiores accusantium obcaecati inventore consequatur
						ipsa beatae aliquid perferendis impedit animi, incidunt sunt rerum
						voluptatum ab. Vel eaque, quas explicabo earum esse nobis a vero,
						quisquam quod ex labore alias accusantium culpa, ullam unde aperiam.
						Esse dolorem corrupti illo a nesciunt ad repudiandae itaque
						quisquam, amet perferendis dolore nobis dolorum excepturi iste,
						commodi nihil fugiat pariatur cum quo repellendus qui veniam. Et
						voluptate ipsam perferendis porro fuga blanditiis molestias! Harum
						obcaecati consequuntur est ea laboriosam, autem at!
					</p>
				</div>
			</div>

			<div className="section_padding2 max-w-[683px] mx-auto">
				<h2 className="uppercase text-2xl tracking-wide font-semibold text-center">
					Motto
				</h2>
				<div className="w-16 h-0.5 bg-black mx-auto mt-2"></div>
				<p className="text-center text-sm mt-4">
					ducimus aperiam quaerat qui, sapiente itaque ea! Quidem accusamus
					tenetur voluptatibus aut quis omnis voluptates. Doloribus cupiditate
					aut numquam impedit quaerat rerum. Dolor dolorum aliquam debitis
					laborum minus numquam repellendus vitae alias porro voluptate, magnam
					explicabo ratione, fuga vero necessitatibus enim eos? Saepe ullam
					necessitatibus, vero exercitationem ut veritatis dignissimos nam
					nostrum.
				</p>
			</div>

			<div className="section_padding2">
				<VisionMissionCard img={sliderImg2} heading="Vision" reverse=""/>
			</div>

            <div className="section_padding2">
                <VisionMissionCard img={sliderImg3} heading="Mission" reverse />
            </div>
		</div>
	);
};

export default AboutUs;
