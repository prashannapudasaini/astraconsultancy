import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeComponent({ onSelectDestination, selectedDestination }) {
  const globeEl = useRef();
  const containerRef = useRef();
  const [globeReady, setGlobeReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  const places = [
    { id: 'united-kingdom', name: 'United Kingdom', lat: 51.5072, lng: -0.1276 },
    { id: 'south-korea', name: 'South Korea', lat: 35.9078, lng: 127.7669 },
    { id: 'new-zealand', name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
    { id: 'europe', name: 'Europe', lat: 48.8566, lng: 2.3522 },
    { id: 'japan', name: 'Japan', lat: 35.6762, lng: 139.6503 }
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
       setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight || containerRef.current.offsetWidth
       });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current && globeReady && !selectedDestination && !isHovered) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.0;
      globeEl.current.controls().enableZoom = true;
    } else if (globeEl.current) {
      globeEl.current.controls().autoRotate = false;
      globeEl.current.controls().enableZoom = true;
    }
  }, [globeReady, selectedDestination, isHovered]);

  useEffect(() => {
     if (selectedDestination && globeEl.current && globeReady) {
        const place = places.find(p => p.id === selectedDestination);
        if (place) {
           globeEl.current.pointOfView({ lat: place.lat, lng: place.lng, altitude: 1.0 }, 1000);
        }
     } else if (!selectedDestination && globeEl.current && globeReady) {
        globeEl.current.pointOfView({ altitude: 2.5 }, 1000);
     }
  }, [selectedDestination, globeReady]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        htmlElementsData={places}
        htmlElement={d => {
          const wrapper = document.createElement('div');
          wrapper.style.width = '48px';
          wrapper.style.height = '48px';
          wrapper.style.display = 'flex';
          wrapper.style.alignItems = 'center';
          wrapper.style.justifyContent = 'center';
          wrapper.style.cursor = 'pointer';
          wrapper.style.position = 'relative';
          wrapper.style.pointerEvents = 'auto';
          wrapper.style.transform = selectedDestination === d.id ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%)';
          wrapper.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)';

          const dot = document.createElement('div');
          dot.style.width = '20px';
          dot.style.height = '20px';
          dot.style.borderRadius = '50%';
          dot.style.backgroundColor = '#e50924';
          dot.style.position = 'relative';
          dot.style.boxShadow = '0 0 20px rgba(229, 9, 36, 0.8)';
          dot.style.border = selectedDestination === d.id ? '3px solid white' : 'none';
          
          wrapper.appendChild(dot);

          // Pulse animation
          const pulse = document.createElement('div');
          pulse.style.position = 'absolute';
          pulse.style.inset = '0';
          pulse.style.borderRadius = '50%';
          pulse.style.backgroundColor = '#e50924';
          pulse.style.opacity = '0.5';
          pulse.style.animation = 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite';
          
          dot.appendChild(pulse);

          // Click handler
          wrapper.onclick = (e) => {
             e.stopPropagation();
             onSelectDestination(selectedDestination === d.id ? '' : d.id);
             
             // Scroll up to the specific destination card on mobile so they can see the change
             if (window.innerWidth < 1024 && selectedDestination !== d.id) {
                setTimeout(() => {
                   const destCard = document.getElementById(`dest-card-${d.id}`);
                   if (destCard) {
                      destCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                   }
                }, 50);
             }
          };
          
          // Hover effect
          wrapper.onmouseenter = () => {
             if (selectedDestination !== d.id) {
                wrapper.style.transform = 'translate(-50%, -50%) scale(1.3)';
             }
          };
          wrapper.onmouseleave = () => {
             if (selectedDestination !== d.id) {
                wrapper.style.transform = 'translate(-50%, -50%) scale(1)';
             }
          };

          return wrapper;
        }}
        onGlobeReady={() => setGlobeReady(true)}
      />
    </div>
  );
}
