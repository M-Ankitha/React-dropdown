import React, { useState } from "react";
import {FaSortDown} from "react-icons/fa";

// Destructuring the props which are coming from app.js
function Dropdown({ options }) {
	// State that shows the selected options
	const [selected, setSelected] = useState("");
	// State that shows and hides the dropdown ( false- not dislayed,  true- displayed)
	const [display, setDisplay] = useState(false);

	// Function which changes the "selected" state according to the user selection and also hides the dropdown menu once user had selected the list item
	const showSelectedOption = (e) => {
          // setting the state equivalent to the selected item by user
		setSelected(e.target.innerText);
          // After the item is selected then  hide the dropdown menu
		setDisplay(false);
	};

	// menuItems variable contain the list of items within li tag and also with appropriate click handler
	let menu = options.map((item) => {
		return <li onClick={showSelectedOption}>{item}</li>;
	});
	
	return (
		<div className="dropdown">
               {/* Dropdown box */}
               {/* on mouse hover set the display of dropdown items as true */}
			<div onMouseEnter={() => setDisplay(true)} className="dropdown-menu">
				<span> Select </span>
				<FaSortDown />
			</div>

               {/* Dropdown items which is displayed only when display is true */}
               {/* Passing menu items as props */}
			{display ? <ul className="menu">{menu}</ul> : ""}

               {/* For the first time when the user open site, selected is empty. so noting is displayed */}
			{selected !== "" ? <h4 className="select-option">Selected Language: {selected}</h4> : ""}
		</div>
	);
}

export default Dropdown;