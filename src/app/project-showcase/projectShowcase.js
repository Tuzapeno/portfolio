"use client";

import React, { useState } from "react";

function Project({
	title,
	description,
	media = null,
	theme = "",
	url = "",
	urlMsg = "",
	urlColor = "blue",
}) {
	const [openImage, setOpenImage] = useState(null);

	const handleImageClick = (src) => {
		setOpenImage(src);
	};

	const closeModal = () => {
		setOpenImage(null);
	};

	return (
		<section className="mb-20 py-10 px-4 flex flex-col items-center justify-center">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
					{title}
				</h2>
				<p className="text-lg text-gray-600 mb-8">
					{description}
					<a
						className={`inline-flex items-center font-medium text-${urlColor}-400 hover:text-${urlColor}-800 transition-colors duration-200 underline-offset-2 hover:underline`}
						href={url}
					>
						{urlMsg}
					</a>
				</p>
				<p className="text-lg text-gray-600 mb-8">
					{!theme === "" && <strong>Theme: {theme}</strong>}
				</p>
				<div className="flex flex-wrap justify-center items-center gap-4">
					{media.map((src, index) => (
						<div key={index} className="cursor-pointer max-w-md">
							<img
								src={src}
								alt={`${title} - mídia ${index + 1}`}
								className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
								onClick={() => handleImageClick(src)}
							/>
						</div>
					))}
				</div>
			</div>
			{openImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
					onClick={closeModal}
				>
					<img
						src={openImage}
						alt="Imagem ampliada"
						className="max-w-full max-h-full rounded-lg shadow-2xl"
					/>
				</div>
			)}
		</section>
	);
}

export default Project;
