import React, { useState, useEffect } from 'react';

function ReviewForm() {
	// const [ reviews, setReviews ] = useState([]);

	// useEffect(() => {
	// 	fetch('/reviews').then((r) => r.json()).then((reviewData) => {
	// 		setReviews(reviewData);
	// 	});
	// }, []);
	// console.log(reviews);

	// 		function handleDelete(id) {
	// 			fetch(`http://localhost:3000/reviews/${id}`, {
	// 				method: 'DELETE',
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 					},
	// 			})
	// 				.then((res) => res.json())
	// 				.then((deletedReviews) =>
	// 					setReviews((prevReviews) => {
	// 						const copyArray = [ ...prevReviews ];
	// 						const index = copyArray.findIndex((review) => deletedReviews.id === review.id);
	// 						copyArray.splice(index, 1);
	// 						return copyArray;
	// 					})
	// 				);

	return <div>0</div>;
}

export default ReviewForm;
