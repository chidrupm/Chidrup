
import React, { useEffect, useRef } from 'react';

interface ParallaxLayerProps {
  speed: 'slow' | 'medium' | 'fast';
  className?: string;
  children: React.ReactNode;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ 
  speed, 
  className = '',
  children 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const elementTop = ref.current.offsetTop;
      const elementHeight = ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in view
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const factor = speed === 'slow' ? 0.05 : speed === 'medium' ? 0.1 : 0.15;
        const yPos = (scrollY - elementTop) * factor;
        ref.current.style.transform = `translateY(${yPos}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export const MountainParallax: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100" />
      
      {/* Far Mountains */}
      <ParallaxLayer speed="slow" className="absolute bottom-0 w-full h-[30%]">
        <div className="absolute bottom-0 w-full h-full bg-mountain-stone/30 rounded-t-[100%] transform translate-y-1/4" />
      </ParallaxLayer>
      
      {/* Mid Mountains */}
      <ParallaxLayer speed="medium" className="absolute bottom-0 w-full h-[25%]">
        <div className="absolute bottom-0 w-full h-full bg-mountain-stone/50 rounded-t-[100%] transform translate-y-1/3" />
      </ParallaxLayer>
      
      {/* Front Mountains */}
      <ParallaxLayer speed="fast" className="absolute bottom-0 w-full h-[20%]">
        <div className="absolute bottom-0 w-full h-full bg-mountain-stone/70 rounded-t-[80%] transform translate-y-1/2" />
      </ParallaxLayer>
      
      {/* Snow Caps */}
      <ParallaxLayer speed="slow" className="absolute bottom-[20%] w-full h-[5%]">
        <div className="absolute bottom-0 w-1/4 h-full bg-mountain-snow rounded-t-[100%] translate-x-1/4" />
        <div className="absolute bottom-0 w-1/5 h-full bg-mountain-snow rounded-t-[100%] translate-x-3/4" />
      </ParallaxLayer>
      
      {/* Floating Cloud */}
      <div className="absolute top-[15%] left-0 w-[150px] h-[60px] bg-white rounded-full opacity-80 animate-float-cloud" />
      <div className="absolute top-[25%] left-[-50px] w-[100px] h-[40px] bg-white rounded-full opacity-60 animate-float-cloud" style={{ animationDelay: '15s' }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};

export default MountainParallax;
