import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showOverlay, setShowOverlay] = useState(true); // Adjust based on login status
  const [reviews, setReviews] = useState([
    { rating: 5, feedback: 'Amazing service!' },
    { rating: 4, feedback: 'Great experience, will come again.' },
  ]);
  const [averageRating] = useState(4.5); // Example average rating
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Simulate form submission
    setReviews([...reviews, { rating, feedback }]);
    setRating(0);
    setFeedback('');
    navigate('/reviews'); // Redirect to the reviews page
  };

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
    // After login, redirect to review section or home page
    // You would typically handle this with authentication flow
  };

  return (
    <div className="relative">
      {/* Overlay for non-logged in users */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Please Log In</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </div>
      )}

      <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>

        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`h-8 w-8 cursor-pointer transition-transform duration-300 ease-in-out ${
                star <= rating ? 'text-yellow-400' : 'text-gray-400'
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
              onClick={() => setRating(star)}
            >
              <path d="M12 2l2.39 4.85 5.36.78-3.87 3.77.91 5.32L12 13.6l-4.79 2.52.91-5.32-3.87-3.77 5.36-.78L12 2z" />
            </svg>
          ))}
        </div>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          rows="4"
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          onClick={handleSubmit}
        >
          Submit Review
        </button>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Overall Rating</h3>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                  star <= averageRating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.39 4.85 5.36.78-3.87 3.77.91 5.32L12 13.6l-4.79 2.52.91-5.32-3.87-3.77 5.36-.78L12 2z" />
              </svg>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Latest Reviews</h4>
            {reviews.length > 0 ? (
              reviews.slice(0, 2).map((review, index) => (
                <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-5 w-5 ${
                          star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l2.39 4.85 5.36.78-3.87 3.77.91 5.32L12 13.6l-4.79 2.52.91-5.32-3.87-3.77 5.36-.78L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">{review.feedback}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}

            <button
              className="mt-4 text-blue-500 hover:underline"
              onClick={() => navigate('/reviews')}
            >
              See All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
