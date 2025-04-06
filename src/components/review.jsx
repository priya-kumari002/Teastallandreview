// import React, { useState } from "react";
// const ReviewComponent = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState("");
//   const [allReviews, setAllReviews] = useState([]);
//   const [giftWinners, setGiftWinners] = useState(new Set());

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name.trim() || !phone.trim() || rating === 0 || review.trim() === "") return;

//     const userReviews = allReviews.filter((rev) => rev.phone === phone);

//     if (userReviews.length >= 5) {
//       alert("You have already submitted 5 reviews.");
//       return;
//     }

//     const newReview = {
//       name,
//       phone,
//       rating,
//       review,
//       date: new Date().toLocaleString(),
//     };

//     setAllReviews([newReview, ...allReviews]);

//     // On the 5th review, show gift message
//     if (userReviews.length === 4) {
//       setGiftWinners(new Set([...giftWinners, phone]));
//       alert("🎉 Congratulations! You won a gift! ");
//     }

//     // Reset form
//     setName("");
//     setPhone("");
//     setRating(0);
//     setReview("");
//   };

//   return (
//     <div>
//       <div style={styles.container}>
//         <h2>Leave a Review</h2>

//         {/* Name Input */}
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={styles.input}
//         />

//         {/* Phone Input */}
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           style={styles.input}
//         />

//         {/* Rating Stars */}
//         <div style={styles.stars}>
//           {[1, 2, 3, 4, 5].map((star) => (
//             <span
//               key={star}
//               onClick={() => setRating(star)}
//               style={{
//                 ...styles.star,
//                 color: star <= rating ? "gold" : "lightgray",
//               }}
//             >
//               ★
//             </span>
//           ))}
//         </div>

//         {/* Textarea for review */}
//         <textarea
//           placeholder="Write your review..."
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           style={styles.textarea}
//         />

//         {/* Submit Button */}
//         <button onClick={handleSubmit} style={styles.button}>
//           Submit
//         </button>

//         {/* Display Reviews */}
//         <h3 style={{ marginTop: "20px" }}>All Reviews:</h3>
//         {allReviews.length === 0 ? (
//           <p>No reviews yet.</p>
//         ) : (
//           allReviews.map((rev, index) => (
//             <div key={index} style={styles.reviewCard}>
//               <div style={{ fontWeight: "bold" }}>
//                 {rev.name} ({rev.phone})
//               </div>
//               <div style={{ color: "gold" }}>
//                 {"★".repeat(rev.rating)}
//                 <span style={{ color: "gray" }}>
//                   {"★".repeat(5 - rev.rating)}
//                 </span>
//               </div>
//               <p style={{ margin: "5px 0" }}>{rev.review}</p>
//               <small style={{ color: "gray" }}>{rev.date}</small>
//               {giftWinners.has(rev.phone) && (
//                 <div style={{ color: "green", fontWeight: "bold", marginTop: "5px" }}>
//                   🎁 Gift Winner!
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "350px",
//     margin: "0 auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "10px",
//     fontFamily: "sans-serif",
//     color: "black",
//   },
//   input: {
//     width: "100%",
//     padding: "8px",
//     marginBottom: "10px",
//     fontSize: "14px",
//     boxSizing: "border-box",
//   },
//   stars: {
//     marginBottom: "10px",
//     fontSize: "24px",
//     cursor: "pointer",
//   },
//   star: {
//     marginRight: "5px",
//   },
//   textarea: {
//     width: "100%",
//     height: "80px",
//     marginBottom: "10px",
//     padding: "8px",
//     fontSize: "14px",
//   },
//   button: {
//     width: "100%",
//     padding: "8px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//   },
//   reviewCard: {
//     border: "1px solid #eee",
//     padding: "10px",
//     borderRadius: "6px",
//     marginTop: "10px",
//   },
// };

// export default ReviewComponent;

import React, { useState, useEffect } from "react";

const ReviewComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [allReviews, setAllReviews] = useState([]);
  const [giftWinners, setGiftWinners] = useState(new Set());

  // Load data from localStorage on mount
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("allReviews")) || [];
    const storedWinners = JSON.parse(localStorage.getItem("giftWinners")) || [];

    setAllReviews(storedReviews);
    setGiftWinners(new Set(storedWinners));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("allReviews", JSON.stringify(allReviews));
    localStorage.setItem("giftWinners", JSON.stringify(Array.from(giftWinners)));
  }, [allReviews, giftWinners]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || rating === 0 || review.trim() === "") return;

    const userReviews = allReviews.filter((rev) => rev.phone === phone);

    if (giftWinners.has(phone)) {
      alert("You have already received a gift and cannot submit more reviews.");
      return;
    }

    if (userReviews.length >= 5) {
      alert("You have already submitted 5 reviews.");
      return;
    }

    const newReview = {
      name,
      phone,
      rating,
      review,
      date: new Date().toLocaleString(),
    };

    const updatedReviews = [newReview, ...allReviews];
    setAllReviews(updatedReviews);

    if (userReviews.length === 4) {
      const updatedWinners = new Set(giftWinners);
      updatedWinners.add(phone);
      setGiftWinners(updatedWinners);
      alert("🎉 Congratulations! You won a gift! ");
    }

    // Reset form
    setName("");
    setPhone("");
    setRating(0);
    setReview("");
  };

  return (
    <div>
      <div style={styles.container}>
        <h2>Leave a Review</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />

        <div style={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                ...styles.star,
                color: star <= rating ? "gold" : "lightgray",
              }}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>

        <h3 style={{ marginTop: "20px" }}>All Reviews:</h3>
        {allReviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          allReviews.map((rev, index) => (
            <div key={index} style={styles.reviewCard}>
              <div style={{ fontWeight: "bold" }}>
                {rev.name} ({rev.phone})
              </div>
              <div style={{ color: "gold" }}>
                {"★".repeat(rev.rating)}
                <span style={{ color: "gray" }}>
                  {"★".repeat(5 - rev.rating)}
                </span>
              </div>
              <p style={{ margin: "5px 0" }}>{rev.review}</p>
              <small style={{ color: "gray" }}>{rev.date}</small>
              {giftWinners.has(rev.phone) && (
                <div style={{ color: "green", fontWeight: "bold", marginTop: "5px" }}>
                  🎁 Gift Winner!
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "sans-serif",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  stars: {
    marginBottom: "10px",
    fontSize: "24px",
    cursor: "pointer",
  },
  star: {
    marginRight: "5px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    marginBottom: "10px",
    padding: "8px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  reviewCard: {
    border: "1px solid #eee",
    padding: "10px",
    borderRadius: "6px",
    marginTop: "10px",
  },
};

export default ReviewComponent;
