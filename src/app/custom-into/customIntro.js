import React from "react";

function CustomIntro({
	content,
	highlight = "",
	highlightColor = "text-blue-400",
}) {
	return (
		<section
			id="projects"
			className="h-screen flex flex-col items-center justify-center bg-black text-white"
		>
			{/* Título centralizado */}
			<div>
				<p className="text-5xl md:text-7xl font-bold mb-10 text-center">
					<span className={highlightColor}>{highlight}</span>{" "}
					{content}
				</p>
			</div>
		</section>
	);
}

export default CustomIntro;
