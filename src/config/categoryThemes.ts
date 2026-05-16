export interface CategoryTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  glowColor: string;
  bgPrimary: string;
  bgSecondary: string;
  cardSurface: string;
  textPrimary: string;
  textSecondary: string;
}

export const defaultTheme: CategoryTheme = {
  primaryColor: '#8B7CFF', // Default Purple
  secondaryColor: '#B69CFF',
  accentColor: '#D8CCFF',
  glowColor: 'rgba(139, 124, 255, 0.4)',
  bgPrimary: '#EDE8FF',
  bgSecondary: '#F8F7FF',
  cardSurface: '#FFFFFF',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
};

export const categoryThemes: Record<string, CategoryTheme> = {
  grocery: {
    primaryColor: '#10B981', // Emerald Green
    secondaryColor: '#34D399',
    accentColor: '#A7F3D0',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    bgPrimary: '#ECFDF5',
    bgSecondary: '#F0FDF4',
    cardSurface: '#FFFFFF',
    textPrimary: '#064E3B',
    textSecondary: '#059669',
  },
  mobiles: {
    primaryColor: '#3B82F6', // Electric Blue
    secondaryColor: '#60A5FA',
    accentColor: '#BFDBFE',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    bgPrimary: '#EFF6FF',
    bgSecondary: '#F8FAFC',
    cardSurface: '#FFFFFF',
    textPrimary: '#1E3A8A',
    textSecondary: '#3B82F6',
  },
  electronics: {
    primaryColor: '#8B5CF6', // Cyber Purple
    secondaryColor: '#A78BFA',
    accentColor: '#DDD6FE',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    bgPrimary: '#111827', // Dark Tech Background
    bgSecondary: '#1F2937',
    cardSurface: '#374151',
    textPrimary: '#F9FAFB',
    textSecondary: '#D1D5DB',
  },
  fashion: {
    primaryColor: '#D4A373', // Luxury Beige/Cream
    secondaryColor: '#E9EDC9',
    accentColor: '#FAEDCD',
    glowColor: 'rgba(212, 163, 115, 0.3)',
    bgPrimary: '#FEFAE0',
    bgSecondary: '#FAEDCD',
    cardSurface: '#FFFFFF',
    textPrimary: '#463F3A',
    textSecondary: '#8A817C',
  },
  beauty: {
    primaryColor: '#F472B6', // Rose Gold / Pink
    secondaryColor: '#F9A8D4',
    accentColor: '#FBCFE8',
    glowColor: 'rgba(244, 114, 182, 0.3)',
    bgPrimary: '#FDF2F8',
    bgSecondary: '#FFF1F2',
    cardSurface: '#FFFFFF',
    textPrimary: '#831843',
    textSecondary: '#BE185D',
  },
  appliances: {
    primaryColor: '#64748B', // Smart Home Silver
    secondaryColor: '#94A3B8',
    accentColor: '#CBD5E1',
    glowColor: 'rgba(100, 116, 139, 0.3)',
    bgPrimary: '#F1F5F9',
    bgSecondary: '#F8FAFC',
    cardSurface: '#FFFFFF',
    textPrimary: '#0F172A',
    textSecondary: '#475569',
  },
  'two-wheeler': {
    primaryColor: '#EF4444', // Racing Red
    secondaryColor: '#F87171',
    accentColor: '#FECACA',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    bgPrimary: '#171717', // Carbon Black Background
    bgSecondary: '#262626',
    cardSurface: '#404040',
    textPrimary: '#F9FAFB',
    textSecondary: '#D4D4D4',
  },
};
