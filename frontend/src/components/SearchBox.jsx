import { useState, useRef } from "react";
import { XMLParser } from "fast-xml-parser";
const apiKey = import.meta.env.VITE_MY_APIKEY;
import Result from "./Result";

function SearchBox() {
  const Domain = useRef("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleLookup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (Domain.current.value.length > 0) {
      try {
        const res = await fetch(
          `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${Domain.current.value}`
        );
        const xmlText = await res.text();
        const parser = new XMLParser();
        const jsonObj = parser.parse(xmlText);
        setData(jsonObj); // Setting the parsed response in state
        console.log(jsonObj);
      } catch (error) {
        console.log("error: " + error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("please enter Domain Name");
    }
  };

  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center">
      <div className="bg-[#181e25] rounded-2xl shadow-lg w-full max-w-2xl mx-auto py-8 px-8 my-8">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-cyan-400 rounded-xl p-4 mb-4">
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
                d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white text-center">
            Domain Lookup
          </h2>
          <p className="text-lg text-blue-200 text-center mt-2">
            Enter a domain name to get detailed WhoIs information
          </p>
        </div>
        <form className="flex w-full max-w-xl mx-auto my-8">
          <div className="flex items-center bg-gray-800 rounded-l-lg px-4 py-3 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              ref={Domain}
              placeholder="example.com"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 rounded-r-lg transition"
            onClick={(e) => {
              handleLookup(e);
            }}
          >
            {isLoading ? "...Loading" : "Lookup"}
          </button>
        </form>
      </div>
      {data && (
        <div className="bg-[#181e25] rounded-2xl shadow-lg w-full max-w-2xl mx-auto py-8 px-8 my-8">
          <Result Data={data} />
        </div>
      )}
    </div>
  );
}

export default SearchBox;
