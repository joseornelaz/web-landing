// // useScrollAnimation.ts
// import { useEffect, useRef } from 'react';

// interface ScrollAnimationOptions {
//   threshold?: number;
//   rootMargin?: string;
//   triggerOnce?: boolean; // Si es true, anima solo una vez
// }

// export const useScrollAnimation = (
//   options: ScrollAnimationOptions = {}
// ) => {
//   const elementRef = useRef<HTMLDivElement>(null);
//   const { 
//     threshold = 0.1, 
//     rootMargin = '0px 0px -100px 0px',
//     triggerOnce = false 
//   } = options;

//   useEffect(() => {
//     const element = elementRef.current;
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-visible');
            
//             // Si triggerOnce es true, dejamos de observar
//             if (triggerOnce) {
//               observer.unobserve(entry.target);
//             }
//           } else if (!triggerOnce) {
//             // Solo removemos la clase si NO es triggerOnce
//             entry.target.classList.remove('animate-visible');
//           }
//         });
//       },
//       { threshold, rootMargin }
//     );

//     observer.observe(element);

//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//     };
//   }, [threshold, rootMargin, triggerOnce]);

//   return elementRef;
// };

// useScrollAnimation.ts
import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean; // Si es true, anima solo una vez
  resetKey?: string | number; // Key para reiniciar animaciones
}

export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { 
    threshold = 0.1, 
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = false,
    resetKey
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Reiniciar animación al cambiar resetKey
    element.classList.remove('animate-visible');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            
            // Si triggerOnce es true, dejamos de observar
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            // Solo removemos la clase si NO es triggerOnce
            entry.target.classList.remove('animate-visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, resetKey]);

  return elementRef;
};