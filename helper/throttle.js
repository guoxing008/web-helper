export default function throttle(func, delay) {
  let lastCallTime = 0;
  return function (...args) {
    const now = Date.now();
    
    if (now - lastCallTime >= delay) {
      func.apply(this, args);
      lastCallTime = now;
    }
  };
}