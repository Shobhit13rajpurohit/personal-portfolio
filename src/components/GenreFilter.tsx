import React from 'react';
import clsx from 'clsx';

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
}

export default function GenreFilter({ genres, selectedGenre, onSelectGenre }: GenreFilterProps) {
  return (
    <div className="flex items-center gap-4 px-4 md:px-16 mb-4 overflow-x-auto scrollbar-hide">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelectGenre(genre)}
          className={clsx(
            "whitespace-nowrap px-4 py-1 rounded-full transition-all",
            selectedGenre === genre
              ? "bg-white text-black"
              : "bg-[#333333] text-white hover:bg-[#444444]"
          )}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}