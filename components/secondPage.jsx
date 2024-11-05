import React from 'react';

const SecondPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Learn More About Our Finance App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Streamline Your Finances</h2>
            <p className="mb-6">
              Our finance app helps you take control of your money by providing a comprehensive view of your spending,
              budgeting, and savings. With intuitive visualizations and smart insights, you'll never miss a bill or
              overspend again.
            </p>
            <a href="#" className="inline-flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] text-white font-normal text-[16px] hover:bg-[#1e4c6d]">
              <img
                src="/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span>Learn More</span>
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
            <p className="mb-6">
              Be the first to get access to our cutting-edge finance app. Sign up for our waitlist and we'll notify you
              as soon as the app is available.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Check Out Our Demo Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;