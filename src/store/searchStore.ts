import { create } from 'zustand';

interface SearchState {
  query: string;
  isSearching: boolean;
  recentSearches: string[];
  setQuery: (query: string) => void;
  setIsSearching: (isSearching: boolean) => void;
  addRecentSearch: (search: string) => void;
  clearRecentSearches: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  isSearching: false,
  recentSearches: [],
  setQuery: (query) => set({ query }),
  setIsSearching: (isSearching) => set({ isSearching }),
  addRecentSearch: (search) => set((state) => ({
    recentSearches: [search, ...state.recentSearches.filter(s => s !== search)].slice(0, 5)
  })),
  clearRecentSearches: () => set({ recentSearches: [] }),
}));
