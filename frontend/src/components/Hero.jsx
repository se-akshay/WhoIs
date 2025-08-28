function Hero() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4">
      <div className=" mt-3 mb-8">
        <span className="inline-block px-6 py-2 rounded-full bg-blue-900 bg-opacity-30 text-blue-400 font-semibold text-lg mb-6 shadow">
          <span className="mr-2">🌐</span> Professional Whois Lookup
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-2">
        Discover Domain
      </h1>
      <h2 className="text-5xl md:text-6xl font-bold text-blue-400 text-center mb-6">
        Intelligence
      </h2>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10">
        Get comprehensive domain information instantly. Lookup registration
        details, name servers, expiration dates, and more with our advanced
        Whois service.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          Start Lookup
        </button>
        <button className="bg-black bg-opacity-80 hover:bg-opacity-100 text-white font-semibold px-8 py-3 rounded-lg shadow transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
