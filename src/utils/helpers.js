/**
 * Calculate countdown from now to a target date
 */
export function getCountdown(targetDate) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  };
}

/**
 * Format a number with commas and optional suffix
 */
export function formatNumber(num) {
  if (num >= 100000) return (num / 100000).toFixed(1) + 'L';
  if (num >= 1000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
  return num.toLocaleString('en-IN');
}

/**
 * Format a date string to readable format
 */
export function formatDate(dateStr) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-IN', options);
}

/**
 * Format date range
 */
export function formatDateRange(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const sMonth = s.toLocaleDateString('en-IN', { month: 'short' });
  const eMonth = e.toLocaleDateString('en-IN', { month: 'short' });
  
  if (sMonth === eMonth) {
    return `${s.getDate()} - ${e.getDate()} ${sMonth}, ${e.getFullYear()}`;
  }
  return `${s.getDate()} ${sMonth} - ${e.getDate()} ${eMonth}, ${e.getFullYear()}`;
}

/**
 * Debounce utility
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Generate initials from a name
 */
export function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Get random color from brand palette
 */
const brandColors = ['#7F77DD', '#1D9E75', '#F5C875', '#E85D6F', '#9B94E8', '#25C08E'];
export function getRandomBrandColor(seed) {
  if (seed !== undefined) {
    return brandColors[seed % brandColors.length];
  }
  return brandColors[Math.floor(Math.random() * brandColors.length)];
}
