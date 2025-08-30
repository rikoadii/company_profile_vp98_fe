import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimationWrapper = ({ 
  children, 
  animation = 'scroll-fade-in',
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  delay = 0
}) => {
  const [elementRef, isVisible] = useScrollAnimation(threshold, rootMargin);

  return (
    <div
      ref={elementRef}
      className={`${animation} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
