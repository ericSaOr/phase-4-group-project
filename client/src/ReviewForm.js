import React, { useState, useEffect } from 'react';
import BakedGoodsViews from './BakedGoodsViews';

function ReviewForm() {
	const [ reviews, setReviews ] = useState([]);

	useEffect(() => {
		fetch('/reviews').then((r) => r.json()).then((reviewData) => {
			setReviews(reviewData);
		});
	}, []);
	console.log(reviews);

	function handleDelete(id) {
		fetch(`/reviews/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((r) => {
			{
				setReviews((reviews) => reviews.filter((review) => review.id === id));
			}
		});
	}

	return (
		<div>
			<BakedGoodsViews handleDelete={handleDelete()} reviews={reviews} />
		</div>
	);
}

export default ReviewForm;
