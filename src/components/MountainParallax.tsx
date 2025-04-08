
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
      
      {/* Far Mountains Layer */}
      <ParallaxLayer speed="slow" className="absolute bottom-0 w-full h-[45%]">
        <div 
          className="absolute bottom-0 w-full h-full bg-cover bg-bottom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            opacity: 0.6
          }}
        />
      </ParallaxLayer>
      
      {/* Mid Mountains Layer */}
      <ParallaxLayer speed="medium" className="absolute bottom-0 w-full h-[35%]">
        <div 
          className="absolute bottom-0 w-full h-full bg-cover bg-bottom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            opacity: 0.7
          }}
        />
      </ParallaxLayer>
      
      {/* Front Mountains Layer */}
      <ParallaxLayer speed="fast" className="absolute bottom-0 w-full h-[25%]">
        <div 
          className="absolute bottom-0 w-full h-full bg-cover bg-bottom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            opacity: 0.8
          }}
        />
      </ParallaxLayer>
      
      {/* Snow Caps Overlay */}
      <ParallaxLayer speed="slow" className="absolute bottom-[25%] w-full h-[10%]">
        <div 
          className="absolute w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            opacity: 0.25,
            filter: "brightness(1.5) contrast(1.2)"
          }}
        />
      </ParallaxLayer>
      
      {/* Floating Clouds */}
      <div className="absolute top-[15%] left-0 w-[150px] h-[60px] bg-white rounded-full opacity-80 animate-float-cloud" />
      <div className="absolute top-[25%] left-[-50px] w-[100px] h-[40px] bg-white rounded-full opacity-60 animate-float-cloud" style={{ animationDelay: '15s' }} />
      <div className="absolute top-[10%] right-[10%] w-[120px] h-[50px] bg-white rounded-full opacity-70 animate-float-cloud" style={{ animationDelay: '8s' }} />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
    </div>
  );
};

export default MountainParallax;
