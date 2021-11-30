import React from "react";

import "./Card.scss";

export default function Card({ optionObject }) {
	return (
		<div className="card">
			<div className="icon item1">
				<span>
					{/* <span></span> */}
					<img src={optionObject.iconImg} alt="" />
				</span>
			</div>
			<div className="heading item2">
				<h2>{optionObject.headingTxt}</h2>
			</div>
			<div className="description item3">{optionObject.desc}</div>
			<div className="action item4">
				<div className="btn">{optionObject.actionBtnTxt}</div>
			</div>
		</div>
	);
}
