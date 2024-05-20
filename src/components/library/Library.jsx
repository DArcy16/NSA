import { Carousel } from 'antd';
import React, { useState } from 'react'
import { useFetchLibrary } from '../../hooks/useHome';
import Loading from '../../pages/Loading';

const Collapse = ({ title, renderItem }) => {
	const [showCollapse, setShowCollapse] = useState(false);

	return (
		<article className="">
			<button
				onClick={() => setShowCollapse(!showCollapse)}
				className="px-5 py-3 w-full flex justify-between drop-shadow-lg items-center bg-third text-[16px] rounded-md text-white font-medium"
			>
				{title} <ArrowDown size={24} />
			</button>
			<div
				className={`px-5 py-5 transform bg-white ${
					showCollapse
						? "block opacity-100 translate-y-0"
						: "hidden opacity-0 -translate-y-full"
				} drop-shadow-lg rounded-b-md transition-all `}
			>
				{renderItem()}
			</div>
		</article>
	);
};

const Library = () => {
    const {data , isLoading} = useFetchLibrary();

    if (isLoading) return <Loading />

  return (
		<div>
			<Carousel className=''>
				{data?.librarysetting?.photo1 && (
					<div className='max-h-96'>
						<img
							className="w-full h-full object-cover"
							src={data?.librarysetting?.photo1}
							alt=""
						/>
					</div>
				)}
				{data?.librarysetting?.photo2 && (
					<div className='max-h-96'>
						<img
							className="w-full h-full object-cover"
							src={data?.librarysetting?.photo2}
							alt=""
						/>
					</div>
				)}
				{data?.librarysetting?.photo3 && (
					<div className='max-h-96'>
						<img
							className="w-full h-full object-cover"
							src={data?.librarysetting?.photo3}
							alt=""
						/>
					</div>
				)}
			</Carousel>
			<div className="flex gap-8 mt-8">
				<div className="flex-1">
					<h2 className="capitalize text-2xl font-semibold text-center">
						{data?.librarysetting?.title}
					</h2>
					<div className="w-24 h-[.2rem] bg-black mx-auto"></div>
					<div
						dangerouslySetInnerHTML={{
							__html: data?.librarysetting?.description,
						}}
						className=" text-justify mt-6 leading-relaxed text-base"
					/>
				</div>
				<div className="w-[300px] space-y-3">
					{data?.librarysetting?.vision_title && (
						<Collapse
							title={data?.librarysetting?.vision_title}
							renderItem={() => {
								return (
									<div
										dangerouslySetInnerHTML={{
											__html: data?.librarysetting?.vision_description,
										}}
										className="font-semibold"
									/>
								);
							}}
						/>
					)}

					{data?.librarysetting?.mission_title && (
						<Collapse
							title={data?.librarysetting?.mission_title}
							renderItem={() => {
								return (
									<div
										dangerouslySetInnerHTML={{
											__html: data?.librarysetting?.mission_description,
										}}
										className="font-semibold"
									/>
								);
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Library