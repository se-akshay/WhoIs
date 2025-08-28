import React from "react";

function WhyUs() {
  return (
    <div className=" bg-gray-900 py-12">
      <h2 className="text-4xl font-bold text-white text-center mb-4">
        Why Choose Our WhoIs Service?
      </h2>
      <p className="text-xl text-blue-200 text-center mb-12 max-w-3xl mx-auto">
        Professional-grade domain intelligence with lightning-fast results and
        comprehensive data coverage.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {/* Card 1 */}
        <div className="bg-[#181e25] rounded-2xl shadow-lg p-8 flex-1 max-w-[400px] flex flex-col items-start">
          <div className="bg-cyan-400 rounded-xl p-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
          <p className="text-gray-300">
            Get instant results with our optimized lookup infrastructure. Query
            millions of domains in milliseconds.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-[#181e25] rounded-2xl shadow-lg p-8 flex-1 max-w-[400px] flex flex-col items-start">
          <div className="bg-cyan-400 rounded-xl p-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 0v4m0-4v-4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Comprehensive Data
          </h3>
          <p className="text-gray-300">
            Access detailed registration information, DNS records, and
            historical data for complete domain intelligence.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-[#181e25] rounded-2xl shadow-lg p-8 flex-1 max-w-[400px] flex flex-col items-start">
          <div className="bg-cyan-400 rounded-xl p-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a2 2 0 00-2-2h-3v4zm-2-4V4a2 2 0 00-2-2H7a2 2 0 00-2 2v16a2 2 0 002 2h6a2 2 0 002-2v-4z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Professional Grade
          </h3>
          <p className="text-gray-300">
            Trusted by security professionals and domain researchers worldwide.
            Enterprise-level reliability and accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
