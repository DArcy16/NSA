import { Carousel } from 'antd'
import React from 'react'

import sliderImg from "../../assets/img/slider1.png"



const BannerSlider = () => {
  return (
		<Carousel>
			<div>
				<img className="w-full h-auto" src={sliderImg} alt="" />
			</div>
			<div>
				<img className="w-full h-auto" src={sliderImg} alt="" />
			</div>
			<div>
				<img className="w-full h-auto" src={sliderImg} alt="" />
			</div>
		</Carousel>
	);
}

export default BannerSlider