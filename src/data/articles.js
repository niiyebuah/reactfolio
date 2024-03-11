import React from "react";

function article_1() {
	return {
		date: "27 April 2023",
		title: "AdRecycle, The future of Plastic Recycling Management.",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					<p>
						In the wake of growing environmental concerns surrounding plastic pollution,
						innovative solutions like AdRecycle are spearheading the future of plastic recycling.
						AdRecycle leverages cutting-edge technologies and sustainable practices to revolutionize the traditional recycling process.
						By incorporating advanced sorting techniques, AI-powered systems, and efficient recycling methods,
						AdRecycle aims to address the challenges of plastic waste management while promoting a circular economy.
						With its commitment to sustainability and environmental stewardship, AdRecycle is poised to lead the way
						in shaping a greener and more eco-friendly future for plastic recycling.
					</p>
					<a href="https://www.youtube.com/watch?v=jIoK7jdm-5U">
						<img
							src="https://img.youtube.com/vi/jIoK7jdm-5U/maxresdefault.jpg"
							alt="YouTube Thumbnail"
							className="video-thumbnail"
							style={{ maxWidth: '100%', height: 'auto' }} // Adjust width and height as needed
						/>
					</a>
					<p></p>
				</div>
			</React.Fragment>


		),
	};
}

function article_2() {
	return {
		date: "5 May 2023",
		title: "Akuafoc-Smart Irrigation System",
		description:
			"Applied project submitted to the Department of Computer Science and Information Systems, Ashesi University, in partial fulfillment of Bachelor of Science degrees in Management Information Systems and Computer Science, May 2023",
		style: ``,
		keywords: [
			"Smart",
			"Irrigation",
			"Smart Irrigation",
			"Rural",
		],
		body: (
			<React.Fragment>
			<div className="article-content">
			  <div className="paragraph"></div>
			  <p>
				This capstone project aims to demonstrate the importance of Smart Irrigation in Ghana by developing an irrigation management system that can operate without relying on the internet or smartphones. The system will use a web-based control system and an Unstructured Supplementary Service Data (USSD) control system to enable small-scale farmers in Ghana to manage their irrigation systems efficiently and effectively. The project addresses the challenges of insufficient water resources and climate change in Ghana's agricultural sector, increasing food security and livelihood opportunities for rural communities. The target market is mainly small-scale farmers in Ghana. The project aims to develop algorithms to accurately estimate and measure soil moisture levels, reducing water wastage and increasing efficiency in crop yield. The project also aims to test and evaluate the developed Smart Irrigation System in small scale farms in Ghana and recommend its adoption and scaling in Ghana's agricultural industry.
			  </p>
			  <a href="https://air.ashesi.edu.gh/items/8fb35a06-99a0-4b1b-beb6-2ea8342c1c2b">
				Read More
			  </a>
			  <p></p>
			</div>			
		  </React.Fragment>
		  
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
