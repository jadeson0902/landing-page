import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="bg-hostaway-dark-green text-white py-3 px-4 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          New
        </span>
        <span className="text-sm">
          Grab your FREE copy of our Direct Booking Guide & Checklist
        </span>
        <a
          href="#"
          className="text-hostaway-orange font-semibold text-sm hover:underline ml-2"
        >
          Download now
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
