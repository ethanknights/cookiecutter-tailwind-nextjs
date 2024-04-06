import React from 'react';
import './styles.css'; // Import your CSS file where you define global styles

const TailwindExamples: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100"> {/* Set background color here */}
      <p className="text-base font-bold text-blue-500">Hello, Tailwind!</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Click me
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-gray-200 p-4">1</div>
        <div className="bg-gray-200 p-4">2</div>
        <div className="bg-gray-200 p-4">3</div>
        <div className="bg-gray-200 p-4">4</div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-700">Card content goes here...</p>
      </div>

      <input
        type="text"
        placeholder="Enter your name"
        className="border rounded-md px-3 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4" role="alert">
        <p className="font-bold">Warning!</p>
        <p>Something went wrong.</p>
      </div>
    </div>
  );
};

export default TailwindExamples;
