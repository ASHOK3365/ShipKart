import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system' | 'antigravity' | 'pastel-luxury';

interface ThemeState {
  theme: Theme;
  categoryTheme: string | null;
  setTheme: (theme: Theme) => void;
  setCategoryTheme: (category: string | null) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'antigravity',
      categoryTheme: null,
      setTheme: (theme) => set({ theme }),
      setCategoryTheme: (categoryTheme) => set({ categoryTheme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
