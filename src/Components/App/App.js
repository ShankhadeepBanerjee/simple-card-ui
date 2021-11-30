import React from "react";

import "./App.scss";

import Card from "../Card/Card";

import destroyImg from "../../assets/destroy1.png";
import deployRocketImg from "../../assets/rocket.png";
import sanityCheckImg from "../../assets/check.png";
import kubernetesImg from "../../assets/kubernetes.svg";

const loremText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt beatae eius nobis nostrum repellat necessitatibus. Aliquid aspernatur voluptatum, quo minima totam illum, eum sunt voluptatibus delectus nemo recusandae asperiores explicabo.";

const options = {
	kubernetes: new optionObj(kubernetesImg, "Kubernetes", loremText, "GO"),
	sanityCheck: new optionObj(
		sanityCheckImg,
		"Sanity Check",
		loremText,
		"Check"
	),
	deploy: new optionObj(deployRocketImg, "Deploy", loremText, "deploy"),
	destroy: new optionObj(
		destroyImg,
		"Infrastructure Destroy",
		loremText,
		"destroy"
	),
};

function optionObj(img, heading, desc, actionBtnTxt) {
	this.iconImg = img;
	this.headingTxt = heading;
	this.desc = desc;
	this.actionBtnTxt = actionBtnTxt;
}

export default function App() {
	return (
		<div className="app">
			{Object.keys(options).map((itemKey, idx) => {
				return <Card optionObject={options[itemKey]} key={idx} />;
			})}
		</div>
	);
}
