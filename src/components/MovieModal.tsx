import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { Movie } from '../types';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-[#181818] rounded-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:opacity-70 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div>
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
          <div className="absolute bottom-[220px] left-0 right-0 bg-gradient-to-t from-[#181818] to-transparent h-32" />
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <button className="bg-white text-black rounded-md py-2 px-6 font-semibold flex items-center hover:bg-opacity-80 transition">
              <Play className="w-5 h-5 mr-2" />
              Play
            </button>
            <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white transition">
              <Plus className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-400 rounded-full p-2 hover:border-white transition">
              <ThumbsUp className="w-5 h-5" />
            </button>
          </div>
          
          <h2 className="text-white text-3xl font-bold mb-4">{movie.title}</h2>
          <div className="text-gray-400 text-sm mb-4">
            <span className="text-green-500 font-semibold">98% Match</span>
            <span className="mx-2">2023</span>
            <span className="border border-gray-400 px-2 py-1 rounded">HD</span>
          </div>
          <p className="text-white mb-4">
            {movie.description || 'A groundbreaking film that pushes the boundaries of storytelling and visual effects, taking viewers on an unforgettable journey through imagination and reality.'}
          </p>
          <div className="text-gray-400">
            <p><span className="text-gray-200">Genres:</span> Action, Science Fiction, Thriller</p>
            <p><span className="text-gray-200">Cast:</span> Actor 1, Actor 2, Actor 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}