import React, { useState, useEffect } from 'react';

function BakedGoodsViews() {
	// const [ bakeItem, setBakeItem ] = useState([]);
	useEffect(() => {
		fetch('/bakeries').then((response) => response.json()).then((bakedData) => {
			console.log(bakedData);
		});
	}, []);

	return <div>hi</div>;
}

export default BakedGoodsViews;
