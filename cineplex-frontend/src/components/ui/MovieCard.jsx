import { MoreVertical } from "lucide-react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import {menu} from '../../constants/constants'
function MovieCardCompact({ movie, onClick, showMenu }) {
      const [open, setOpen] = useState(false);
  return (
    <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-md w-45 md:w-55 lg:w-55">
      <img
        src={movie.image}
        alt={movie.title}
        className="h-64 w-full object-cover cursor-pointer"
        onClick={() => onClick && onClick(movie)}
      />

      <div className="p-4 text-center text-white text-sm font-semibold truncate">
        {movie.title}
      </div>

     {showMenu && (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="absolute top-2 right-2 bg-black/60 p-1 rounded-full hover:bg-black"
          >
            <MoreVertical size={16} className="text-white" />
          </button>

          {open && (
            <div className="absolute right-2 top-10 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-20 w-32">
              <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-700">
                Details
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-700">
                Watched
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-700">
                Remove
              </button>
            </div>
          )}
        </>
      )}
    </div>
 
  );
}

export default MovieCardCompact;
