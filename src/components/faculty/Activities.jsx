/** @format */

import React from "react";

import commactivity1 from "../../assets/img/commActivity1.jpg";
import commactivity2 from "../../assets/img/commactivity2.jpg";
import commactivity3 from "../../assets/img/commactivity3.jpg";
import commactivity4 from "../../assets/img/commactivity4.jpg";
import commactivity5 from "../../assets/img/commactivity5.jpg";
import commactivity6 from "../../assets/img/commactivity6.jpg";

const Activities = ({ major }) => {

  const ActivityCard = ({title, photo, date}) => {
    return <article className="w-[300px]">
      <img className="w-[300px] h-[180px]" src={photo} alt={title}/>
      <h2 className="text-base mt-1 w-full font-bold">{title}</h2>
      <span className="font-medium">({date})</span>
    </article>
  }
	return (
		<div className="mt-8 space-y-8">
			<h2 className="text-2xl font-bold text-center">Activities</h2>
			<div className="w-[960px] mx-auto flex flex-wrap gap-[20px]">
				<ActivityCard
					title="Sharing Internship Experience"
					photo={commactivity1}
					date="29.12.2023"
				/>
				<ActivityCard
					title="Class Work Activity"
					photo={commactivity2}
					date="31.01.2023"
				/>
				<ActivityCard
					title="Ethnic Traditional Food Sale"
					photo={commactivity3}
					date="09.02.2024"
				/>
				<ActivityCard
					title="Myanmar Traditional Htamane-Making Competition"
					photo={commactivity4}
					date="23.02.2024"
				/>
				<ActivityCard
					title="Table Tennis Tournament"
					photo={commactivity5}
					date="27.02.2024"
				/>
				<ActivityCard
					title="Research Project Proposal"
					photo={commactivity6}
					date="06.03.2023"
				/>
			</div>
		</div>
	);
};

export default Activities;
