export const theme = {
  colors: {
    primary: "#1a237e",
    secondary: "#3949ab",
    background: "#f0f2f5",
    text: "#2c3e50",
    error: "#e74c3c",
    success: "#2ecc71",
    warning: "#ffc107",
    white: "#ffffff",
    gray: {
      100: "#f8f9fa",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#6c757d",
      700: "#495057",
      800: "#343a40",
      900: "#212529",
    }
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px",
  },
  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px rgba(0, 0, 0, 0.1)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
  }
};

export type Theme = typeof theme; 