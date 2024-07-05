// src/app/update-course-content/page.tsx

import React from 'react';

const UpdateCourseContent = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Update Course Content</h1>
      <p className="text-gray-600 mb-6">Update with lectures and titles</p>
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Rearrange Lessons</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Add Lesson</button>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-100 p-4 rounded flex justify-between items-center">
              <div>
                <div className="text-gray-800 font-medium">[id]</div>
                <div className="text-gray-600">[title]</div>
              </div>
              <div className="space-x-2">
                <button className="bg-purple-500 text-white px-4 py-2 rounded">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Course Details</h2>
          <div className="bg-gray-100 p-4 rounded">
            <div className="mb-2">
              <div className="text-gray-800 font-medium">Haily Brown</div>
              <div className="text-gray-600">Language</div>
            </div>
            <div className="mb-2">
              <div className="text-gray-800 font-medium">Total Length</div>
              <div className="text-gray-600">123 West Hollywood Blvd. San Mateo, CA. 90294</div>
            </div>
            <div className="mb-2">
              <div className="text-gray-800 font-medium">Total Lessons</div>
              <div className="text-gray-600">123 West Hollywood Blvd. San Mateo, CA. 90294</div>
            </div>
            <div className="mb-2">
              <div className="text-gray-800 font-medium">Total Sections</div>
              <div className="text-gray-600">123 West Hollywood Blvd. San Mateo, CA. 90294</div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Update Course Information</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourseContent;
