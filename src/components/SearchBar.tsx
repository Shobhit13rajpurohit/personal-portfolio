import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import clsx from 'clsx';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative"
    >
      <div className={clsx(
        "flex items-center transition-all duration-300",
        isExpanded ? "bg-black bg-opacity-90 border border-white" : ""
      )}>
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="text-white p-2"
        >
          <SearchIcon className="w-6 h-6" />
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Titles, people, genres"
          className={clsx(
            "bg-transparent text-white outline-none transition-all duration-300",
            isExpanded ? "w-[200px] px-2" : "w-0"
          )}
          onBlur={() => {
            if (!searchQuery) setIsExpanded(false);
          }}
        />
      </div>
    </form>
  );
}