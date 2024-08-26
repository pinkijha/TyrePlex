import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { AiFillStar } from 'react-icons/ai';

const feedbacks = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxEuOgrydWFyurdUW5UNRhk6tShevfV2ZJQ&s',
    rating: 5,
    review: 'Great service! Highly recommend.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxEuOgrydWFyurdUW5UNRhk6tShevfV2ZJQ&s',
    rating: 4,
    review: 'Good experience, but the wait time could be improved.',
  },
  // Add more feedbacks as needed
];

const CustomerFeedback = () => {
  return (
    <div className="container mt-5 p-5 bg-light rounded shadow-lg">
      <h2 className="text-center font-weight-bold text-danger mb-4">Customer Feedback</h2>
      <Carousel>
        {feedbacks.map((feedback) => (
          <Carousel.Item key={feedback.id} interval={3000}>
            <div className="d-flex justify-content-center">
              <div className="bg-white p-4 rounded-lg shadow d-flex flex-column align-items-center" style={{ maxWidth: '400px' }}>
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div className="text-center">
                  <h3 className="font-weight-bold text-dark">{feedback.name}</h3>
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    {[...Array(feedback.rating)].map((_, index) => (
                      <AiFillStar key={index} className="text-warning" />
                    ))}
                    {[...Array(5 - feedback.rating)].map((_, index) => (
                      <AiFillStar key={index} className="text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted font-italic">{feedback.review}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerFeedback;
