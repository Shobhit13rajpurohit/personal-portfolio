import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export default function MovieRow({ title, movies, onMovieClick }: MovieRowProps) {
  const slideLeft = () => {
    const slider = document.getElementById('slider-' + title);
    if (slider) slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider-' + title);
    if (slider) slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="space-y-2 px-4 md:px-16">
      <h2 className="text-white text-xl md:text-2xl font-bold">{title}</h2>
      <div className="relative group">
        <ChevronLeft
          onClick={slideLeft}
          className="absolute left-0 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 text-white"
        />
        <div
          id={`slider-${title}`}
          className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onMovieClick(movie)}
              className="inline-block w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer p-2 transition duration-300 ease-out md:hover:scale-105"
            >
              <div className="relative group/item">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-sm object-cover w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/item:bg-opacity-50 transition-all duration-300 rounded-sm">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover/item:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{movie.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-500">{movie.rating}% Match</span>
                      <span>{movie.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {movie.genre.map((g, index) => (
                        <span key={index} className="text-xs text-gray-300">
                          {index > 0 ? ' • ' : ''}{g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ChevronRight
          onClick={slideRight}
          className="absolute right-0 top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 text-white"
        />
      </div>
    </div>
  );
}