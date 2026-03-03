// Unified Design System - Portfolio
export const designSystem = {
  colors: {
    primary: '#2E7D32',
    primaryHover: '#1B5E20',
    primaryLight: '#E8F5E9',
    text: {
      primary: '#333333',
      secondary: '#666666',
      tertiary: '#999999',
    },
    border: '#E5E7EB',
    background: '#FFFFFF',
    surface: '#F9FAFB',
  },
  
  typography: {
    h1: 'text-[56px] font-bold tracking-tight leading-[1.1]',
    h2: 'text-4xl font-bold tracking-tight leading-[1.2]',
    h3: 'text-2xl font-semibold leading-[1.3]',
    bodyLarge: 'text-lg leading-relaxed',
    body: 'text-base leading-normal',
    small: 'text-sm font-medium',
  },
  
  spacing: {
    section: 'py-24',
    container: 'max-w-[1152px] mx-auto px-6',
    cardPadding: 'p-8',
    gap: {
      xs: 'gap-2',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
    }
  },
  
  components: {
    card: 'bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300',
    button: {
      primary: 'px-6 py-3 bg-[#2E7D32] text-white rounded-xl font-medium hover:bg-[#1B5E20] transition-all duration-300',
      secondary: 'px-6 py-3 border-2 border-[#E5E7EB] text-[#333333] rounded-xl font-medium hover:border-[#2E7D32] hover:text-[#2E7D32] transition-all duration-300',
    },
    input: 'w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-[#333333] outline-none focus:border-[#2E7D32] transition-all duration-300',
  }
}
