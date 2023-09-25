import {useState, useEffect} from 'react';
import debounce from '../helper/debounce';

export default function useSize () {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight - 72);
    };
    updateSize();
    window.addEventListener('resize', debounce(updateSize, 300));
    return() => {
      window.removeEventListener('ersize', updateSize);
    }
  }, []);
  return {
    width,
    height,
  }
}