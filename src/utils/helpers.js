// Helper functions for BHABIT app
export const formatTokenAmount = (amount) => {
  if (amount >= 1e12) {
    return `${(amount / 1e12).toFixed(1)}T`;
  }
  if (amount >= 1e9) {
    return `${(amount / 1e9).toFixed(1)}B`;
  }
  if (amount >= 1e6) {
    return `${(amount / 1e6).toFixed(1)}M`;
  }
  return amount.toLocaleString();
};

export const calculatePercentage = (part, total) => {
  return ((part / total) * 100).toFixed(1);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};