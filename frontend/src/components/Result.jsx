import React from "react";

function Result({Data}) {
  

  const record = Data.WhoisRecord;

  return (
    <div className="bg-[#181e25] rounded-2xl shadow-lg p-8 w-full max-w-3xl mx-auto my-8">
      <div className="flex items-center mb-6">
        <div className="bg-cyan-400 rounded-xl p-3 mr-4">
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
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{record.domainName}</h2>
          <p className="text-cyan-400 font-medium">Domain Information</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="bg-[#13171c] rounded-xl p-4 flex items-center">
            <div className="bg-cyan-700 rounded-lg p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <div>
              <div className="text-white font-semibold">Registrar</div>
              <div className="text-gray-300">{record.registrarName}</div>
            </div>
          </div>
          <div className="bg-[#13171c] rounded-xl p-4 flex items-center">
            <div className="bg-teal-700 rounded-lg p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Registration Date</div>
              <div className="text-gray-300">
                {record.createdDateNormalized.split(" ")[0]}
              </div>
            </div>
          </div>
          <div className="bg-[#13171c] rounded-xl p-4 flex items-center">
            <div className="bg-red-700 rounded-lg p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Expiration Date</div>
              <div className="text-gray-300">
                {record.expiresDateNormalized.split(" ")[0]}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#13171c] rounded-xl p-4">
            <div className="flex items-center mb-2">
              <div className="bg-cyan-700 rounded-lg p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <div className="text-white font-semibold">Name Servers</div>
            </div>
            <div className="text-gray-300 ml-12 break-words break-all overflow-x-auto">
              {Array.isArray(record?.nameServers?.hostNames?.Address) ? (
                record.nameServers.hostNames.Address.map((ns, i) => (
                  <div key={i}>{ns}</div>
                ))
              ) : record?.nameServers?.rawText ? (
                <div>{record.nameServers.rawText}</div>
              ) : null}
            </div>
          </div>
          <div className="bg-[#13171c] rounded-xl p-4 flex items-center">
            <div className="bg-teal-700 rounded-lg p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 22s8-4.5 8-10V5a8 8 0 10-16 0v7c0 5.5 8 10 8 10z"
                />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Status</div>
              <div className="text-gray-300 break-words break-all overflow-x-auto">
                {record.status || "Unknown"}
              </div>
            </div>
          </div>
          <div className="bg-[#13171c] rounded-xl p-4 flex items-center">
            <div className="bg-cyan-700 rounded-lg p-2 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <div>
              <div className="text-white font-semibold">Registrant</div>
              <div className="text-gray-300 break-words break-all overflow-x-auto">
                {record?.registrant?.organization || "Unknown"}
                {record?.registrant?.rawText && (
                  <div className="text-xs text-gray-400 mt-1">
                    {record.registrant.rawText}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
