import React from "react";

function StatsBar() {
  return (
    <div className="bg-[#181e25] py-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="text-center mx-20">
          <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
          <div className="text-lg text-blue-200">Domains Queried Daily</div>
        </div>
        <div className="text-center mx-20">
          <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
          <div className="text-lg text-blue-200">Uptime Guarantee</div>
        </div>
        <div className="text-center mx-20">
          <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
          <div className="text-lg text-blue-200">TLDs Supported</div>
        </div>
      </div>
    </div>
  );
}

export default StatsBar;
