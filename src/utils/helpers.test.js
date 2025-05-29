import { formatTokenAmount, calculatePercentage, validateEmail } from './helpers';

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

// Tests
describe('Helper Functions', () => {
  describe('formatTokenAmount', () => {
    test('formats trillions correctly', () => {
      expect(formatTokenAmount(13000000000000)).toBe('13.0T');
      expect(formatTokenAmount(1500000000000)).toBe('1.5T');
    });

    test('formats billions correctly', () => {
      expect(formatTokenAmount(3900000000)).toBe('3.9B');
      expect(formatTokenAmount(1200000000)).toBe('1.2B');
    });

    test('formats millions correctly', () => {
      expect(formatTokenAmount(25000000)).toBe('25.0M');
      expect(formatTokenAmount(1500000)).toBe('1.5M');
    });

    test('formats smaller numbers with commas', () => {
      expect(formatTokenAmount(100000)).toBe('100,000');
      expect(formatTokenAmount(1000)).toBe('1,000');
    });
  });

  describe('calculatePercentage', () => {
    test('calculates percentage correctly', () => {
      expect(calculatePercentage(30, 100)).toBe('30.0');
      expect(calculatePercentage(13, 100)).toBe('13.0');
      expect(calculatePercentage(25, 100)).toBe('25.0');
    });

    test('handles decimal results', () => {
      expect(calculatePercentage(1, 3)).toBe('33.3');
      expect(calculatePercentage(2, 3)).toBe('66.7');
    });
  });

  describe('validateEmail', () => {
    test('validates correct email addresses', () => {
      expect(validateEmail('accounts@bhabit.net')).toBe(true);
      expect(validateEmail('user@example.com')).toBe(true);
      expect(validateEmail('test.email+tag@domain.co.uk')).toBe(true);
    });

    test('rejects invalid email addresses', () => {
      expect(validateEmail('invalid.email')).toBe(false);
      expect(validateEmail('@bhabit.net')).toBe(false);
      expect(validateEmail('user@')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });
});