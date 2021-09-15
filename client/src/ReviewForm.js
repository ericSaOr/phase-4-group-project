import React, { useState, useEffect } from 'react';

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
			method: 'DELETE'
		}).then((r) => {
			if (r.ok) {
				setReviews((reviews) => reviews.filter((review) => review.id === id));
			}
		});
	}

	return (
		<div>
			<button onClick={() => handleDelete(reviews.id)}>Delete</button>;
		</div>
	);
}

export default ReviewForm;
