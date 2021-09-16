import React, { useState, useEffect } from 'react';

function BakedGoodsViews() {
	const [ reviewItems, setReviewItems ] = useState([]);

	useEffect(() => {
		fetch('/reviews').then((response) => response.json()).then((reviewData) => {
			console.log(reviewData);
			setReviewItems(reviewData);
		});
	}, []);
	console.log(reviewItems);

	function mapReviews() {
		return reviewItems.map((reviewItem) => {
					<div className="bake-item">
					<img src={reviewItem.bakery.image} alt="A delicious donut" />
					<p>{reviewItem.note}</p>
					<button
						onClick={() => {
							handleDelete(reviewItem.id);
						}}
					>
						Delete
					</button>
				</div>
			
		});

		function handleDelete(id) {
			fetch(`/reviews/${id}`, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((deadReviewItems) =>
					setReviewItems((prevReviewItems) => {
						const copyArray = [ ...prevReviewItems ];
						const index = copyArray.findIndex(
							(prevReviewItems) => prevReviewItems.id === deadReviewItems.id
						);
						copyArray.splice(index, 1);
						return copyArray;
					})
				);
		}

		// function handleCreate() {
		// 	fetch(`/reviews/`, {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Accept: 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			note
		// 		})
		// 	})
		// 		.then((res) => res.json())
		// 		.then((newBakeryItem) => setReviewItems((reviewItems) => [ ...reviewItems, newBakeryItem ]));
		// }
	}
	return(
	<>
	<div>{mapReviews()}</div>
	</>)
}

export default BakedGoodsViews;
