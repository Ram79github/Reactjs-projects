import React from "react";

function Card({ elem }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={elem?.src.large}
          alt={elem?.alt || "Pexels Image"}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white truncate">
            {elem?.photographer}
          </h3>

          <span className="text-xs bg-amber-300 text-black px-2 py-1 rounded-full font-medium">
            Pexels
          </span>
        </div>

        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {elem.alt || "Beautiful photography from Pexels."}
        </p>

        <div className="flex justify-between items-center mt-4">
          <a
            href={elem.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 text-sm hover:underline"
          >
            View Photo
          </a>

          <span className="text-xs text-gray-500">
            {elem?.width} × {elem?.height}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Card;