import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'admin';
  joinedAt: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, name?: string) => Promise<void>;
  signup: (name: string, email: string, phone: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, name = 'Ashok') => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          const mockUser: User = {
            id: 'u-' + Math.random().toString(36).substr(2, 9),
            name: name,
            email: email,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
            role: 'user',
            joinedAt: Date.now() - 1000 * 60 * 60 * 24 * 30, // Joined 30 days ago
          };
          
          set({ user: mockUser, isAuthenticated: true, isLoading: false });
        } catch (err) {
          set({ error: 'Invalid credentials', isLoading: false });
        }
      },

      signup: async (name, email, phone) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const mockUser: User = {
            id: 'u-' + Math.random().toString(36).substr(2, 9),
            name: name,
            email: email,
            phone: phone,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
            role: 'user',
            joinedAt: Date.now(),
          };
          
          set({ user: mockUser, isAuthenticated: true, isLoading: false });
        } catch (err) {
          set({ error: 'Account creation failed', isLoading: false });
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },

      setError: (error) => set({ error }),
    }),
    {
      name: 'shopkart-auth',
    }
  )
);
