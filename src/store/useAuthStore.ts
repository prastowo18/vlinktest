import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { decode } from 'react-native-pure-jwt';
import { asyncStorageAdapter } from '../lib/adapters';

type AuthState = {
  token: string | null;
  email: string | null;
  isLoggedIn: boolean;
  login: (email: string, token: string) => void;
  logout: () => void;
  checkTokenValid: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      email: null,
      isLoggedIn: false,
      login: (email, token) => set({ token, email, isLoggedIn: true }),
      logout: () => set({ token: null, email: null, isLoggedIn: false }),
      checkTokenValid: async () => {
        const token = get().token;
        if (!token) {
          set({ isLoggedIn: false });
          return;
        }
        try {
          const payload: any = await decode(token, '', {
            skipValidation: true,
          });
          const now = Math.floor(Date.now() / 1000);
          if (payload.exp && payload.exp < now) {
            set({ token: null, email: null, isLoggedIn: false });
          } else {
            set({ isLoggedIn: true });
          }
        } catch {
          set({ token: null, email: null, isLoggedIn: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: asyncStorageAdapter,
    },
  ),
);
