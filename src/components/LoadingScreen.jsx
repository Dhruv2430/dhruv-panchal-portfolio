import React, { useEffect, useState } from 'react';

const LOADING_MS = 2300;
const EXIT_MS = 500;

const APPLE_FONT_STACK =
  '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const tick = () => {
      const elapsed = performance.now() - start;
      const next = Math.min((elapsed / LOADING_MS) * 100, 100);
      setProgress(next);

      if (elapsed < LOADING_MS) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    const exitTimer = setTimeout(() => setIsExiting(true), LOADING_MS);
    const hideTimer = setTimeout(() => setIsVisible(false), LOADING_MS + EXIT_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center bg-[#F5F5F7]'
      style={{
        opacity: isExiting ? 0 : 1,
        filter: isExiting ? 'blur(8px)' : 'blur(0px)',
        transition: `opacity ${EXIT_MS}ms ease-in-out, filter ${EXIT_MS}ms ease-in-out`,
      }}
    >
      <div className='flex w-full max-w-[420px] flex-col items-center px-8'>
        <h1
          className='mb-8 text-[clamp(2.5rem,7vw,4.25rem)] font-bold tracking-[-0.03em] text-[#1D1D1F] animate-[fadeIn_900ms_ease-in-out,breath_2200ms_ease-in-out_infinite]'
          style={{ fontFamily: APPLE_FONT_STACK }}
        >
          Dhruv
        </h1>

        <div className='h-[3px] w-full overflow-hidden rounded-full bg-[#D2D2D7] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-sm'>
          <div
            className='h-full rounded-full bg-gradient-to-r from-[#BFC0C5] via-[#8C8D91] to-[#4F4F53]'
            style={{
              width: `${progress}%`,
              transition: 'width 120ms ease-in-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
