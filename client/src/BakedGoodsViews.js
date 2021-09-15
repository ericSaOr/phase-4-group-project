import React, { useState, useEffect } from 'react';

function BakedGoodsViews({ handleDelete, reviews }) {
	const [ bakeItems, setBakeItems ] = useState([]);

	useEffect(() => {
		fetch('/reviews').then((response) => response.json()).then((bakedData) => {
			setBakeItems(bakedData);
		});
	}, []);

	return bakeItems.map((bakeItem) => {
		return (
			<div className="bake-item">
				<img src={bakeItem.bakery.image} alt="A delicious donut" />
				<p>{bakeItem.note}</p>
				<button onClick={() => handleDelete(bakeItems.id)}>Delete</button>
			</div>
		);
	});
}

export default BakedGoodsViews;
