import { useRef, useEffect } from 'react';

export const useThrottledEffect = <R extends (...args: any[]) => any>
  (fn: R, delay: number, deps: ReadonlyArray<any>) => {
  const lastCall = useRef(Date.now());

  useEffect(
    () => {
      const handler = setTimeout(() => {
        if (Date.now() - lastCall.current < delay) return;

        fn();
        lastCall.current = Date.now();
      }, delay - (Date.now() - lastCall.current));

      return () => {
        clearTimeout(handler);
      };
    },
    [deps],
  );
};
