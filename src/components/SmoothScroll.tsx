import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // 기본 CSS 포함

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Lenis 초기화
    const lenis = new Lenis({
      duration: 1.2,      // 스크롤 속도 (숫자가 클수록 더 느긋함)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 부드러운 가속 곡선
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 2. Framer Motion이나 다른 애니메이션과의 동기화를 위한 RAF 설정
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 3. 전역 window 객체에 등록 (내비게이션에서 제어하기 위함)
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}