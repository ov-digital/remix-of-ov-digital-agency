import caseImageDesktop from "@/assets/case-fishing-desktop.jpg";
import caseImageMobile from "@/assets/case-fishing-mobile.jpg";

const FishingWeekendPreview = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 overflow-hidden">
      {/* Water pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="waves" patternUnits="userSpaceOnUse" width="20" height="10" patternTransform="rotate(-5)">
              <path d="M0 5 Q5 0, 10 5 T20 5" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>
      
      {/* Desktop mockup */}
      <div className="absolute left-[5%] top-[12%] w-[65%] z-10">
        <div className="bg-gray-800 rounded-t-lg p-1.5 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="flex-1 mx-2">
            <div className="bg-gray-700 rounded text-[6px] text-gray-400 px-2 py-0.5 text-center truncate">
              fishing-weekend.ru
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow-2xl">
          <img 
            src={caseImageDesktop} 
            alt="Fishing Weekend Desktop"
            className="w-full h-auto object-cover object-top"
            style={{ maxHeight: '180px' }}
          />
        </div>
        <div className="bg-gray-800 h-3 rounded-b-lg" />
      </div>
      
      {/* Mobile mockup */}
      <div className="absolute right-[8%] bottom-[8%] w-[22%] z-20">
        <div className="bg-gray-900 rounded-2xl p-1 shadow-2xl">
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            {/* Phone notch */}
            <div className="bg-gray-900 h-2 flex justify-center">
              <div className="w-8 h-1.5 bg-gray-800 rounded-b-lg" />
            </div>
            <div className="bg-white overflow-hidden">
              <img 
                src={caseImageMobile} 
                alt="Fishing Weekend Mobile"
                className="w-full h-auto object-cover object-top"
                style={{ maxHeight: '140px' }}
              />
            </div>
            {/* Home indicator */}
            <div className="bg-gray-900 h-2 flex justify-center items-center">
              <div className="w-6 h-0.5 bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative fish icon */}
      <div className="absolute top-4 right-4 text-white/20 text-4xl">
        🐟
      </div>
    </div>
  );
};

export default FishingWeekendPreview;
