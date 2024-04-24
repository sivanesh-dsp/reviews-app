import React from "react";

function YouTubeReview() {
  return (
    <main className="w-full mt-5 flex justify-center">
      <div className="w-[550px] bg-white m-3 p-5 rounded-[25px] shadow">
        <h4>Share your reviews</h4>
        <form action="" className="my-5">
          <div>
            <label htmlFor="improve" className="block text-gray-600 mb-2">
              How we can improve?
            </label>
            <textarea
              placeholder="Enter information briefly"
              className="bg-gray-200 w-full px-4 py-2 rounded"
            ></textarea>
          </div>
          <button
            type="button"
            className="px-4 py-2 mt-2 rounded bg-orange-400 text-white hover:bg-gray-300 hover:text-orange-800"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default YouTubeReview;
