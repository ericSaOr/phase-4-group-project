import React, { useState, useEffect } from 'react';

function BakedGoodsViews() {
	const [ bakeItems, setBakeItems ] = useState([]);
	useEffect(() => {
		fetch('/bakeries').then((response) => response.json()).then((bakedData) => {
			setBakeItems(bakedData);
		});
	}, []);

	return bakeItems.map((bakeItem) => {
		return (
			<div className="bake-item">
				<img src={bakeItem.image} alt="A delicious donut" />
				<p>{bakeItem.note}</p>
				<button onClick={() => handleDelete()}>BAM</button>
			</div>
		);
	});

	function handleDelete() {
		console.log('hi');
		return <div />;
	}
}

export default BakedGoodsViews;
