import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const PageTransition = ({ children }) => {
  const container = useRef();
  const location = useLocation();

  useGSAP(() => {
    // ScrollTrigger.refresh() on route change after a short delay to allow DOM updates
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(container.current, {
        opacity: 0,
        clipPath: 'inset(0 0 10% 0)',
        duration: 0.5,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });
  }, [location.pathname]);

  return <div ref={container}>{children}</div>;
};

export const usePageEntrance = (containerRef, selectors = ['.eyebrow', 'h1', 'h2', 'p', '.button', '.hero-meta', '.hero-support', '.image-label']) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Find elements that exist in the container, but only in the first section to avoid conflicting with scroll reveals
      const firstSection = containerRef.current.querySelector('section');
      if (firstSection) {
        const elements = firstSection.querySelectorAll(selectors.join(', '));
        if (elements.length > 0) {
          gsap.from(elements, {
            y: 24,
            opacity: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "all"
          });
        }
      }
    });
  }, { scope: containerRef });
};

export const useScrollReveal = (containerRef) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const sections = containerRef.current.querySelectorAll('.scroll-reveal');
      sections.forEach(section => {
        // Animate immediate children or specific target classes
        const targets = section.querySelectorAll('.reveal-item, h2, h3, p, .button, .country-card, .service, .resource-card, li, .step');
        if (targets.length > 0) {
          gsap.from(targets, {
            scrollTrigger: {
              trigger: section,
              start: "top 84%",
              once: true,
              invalidateOnRefresh: true,
            },
            y: 24,
            opacity: 0,
            duration: 0.6,
            stagger: 0.09,
            ease: "power3.out",
            clearProps: "all"
          });
        }
      });
    });
  }, { scope: containerRef });
};

export const useHeroAnimation = (containerRef) => {
  useGSAP(() => {
    const introSection = containerRef.current.querySelector('.hero');
    if (!introSection) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // Hero Copy Elements
    const eyebrow = introSection.querySelector('.hero-copy .eyebrow');
    const title = introSection.querySelector('.hero-copy h1');
    const desc = introSection.querySelector('.hero-copy p');
    const buttons = introSection.querySelector('.hero-copy .flex.gap-3');
    const support = introSection.querySelector('.hero-copy .hero-support');
    const meta = introSection.querySelector('.hero-copy .hero-meta');

    // Hero Visual Elements
    const img = introSection.querySelector('.hero-visual img');
    const shade = introSection.querySelector('.hero-visual .image-shade');
    const label = introSection.querySelector('.hero-visual .image-label');
    const seal = introSection.querySelector('.hero-visual .hero-seal');

    // Cinematic Animation Sequence for Original Layout
    tl.from(img, { scale: 1.1, opacity: 0, duration: 2, ease: "power3.out" })
      .from(shade, { opacity: 0, duration: 1 }, "-=1.5")
      .fromTo([eyebrow, title, desc, buttons], 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, clearProps: "all" }, "-=1.2"
      )
      .fromTo([support, meta], 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, clearProps: "all" }, "-=0.8"
      )
      .from(label, { x: 30, opacity: 0, duration: 1, clearProps: "all" }, "-=1.0")
      .from(seal, { scale: 0, rotation: -45, opacity: 0, duration: 1, ease: "back.out(1.5)", clearProps: "all" }, "-=0.8");

    // Continuous floating for seal
    if (seal) gsap.to(seal, { y: -10, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });

  }, { scope: containerRef });
};

export const useJourneyAnimation = (containerRef) => {
    useGSAP(() => {
        const steps = containerRef.current.querySelectorAll('.step');
        
        steps.forEach((step, i) => {
            const circle = step.querySelector('span');
            const content = step.querySelectorAll('h3, p');
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%",
                    once: true,
                }
            });
            
            tl.from(circle, { scale: 0, rotationY: 180, opacity: 0, duration: 0.8, ease: "back.out(1.7)", clearProps: "all" })
              .from(content, { x: -30, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power3.out", clearProps: "all" }, "-=0.5");
              
            // WOW interactive hover effect
            step.addEventListener('mouseenter', () => {
              gsap.to(step, { x: 10, duration: 0.3, ease: "power2.out" });
              if (circle) gsap.to(circle, { scale: 1.2, backgroundColor: "#e50924", color: "white", duration: 0.3, ease: "back.out(2)" });
            });
            
            step.addEventListener('mouseleave', () => {
              gsap.to(step, { x: 0, duration: 0.3, ease: "power2.out" });
              if (circle) gsap.to(circle, { scale: 1, backgroundColor: "transparent", color: "#e50924", duration: 0.3, ease: "power2.out" });
            });
        });
        
        // Add a pulse effect to the first step as 'current milestone'
        if (steps.length > 0) {
           const firstCircle = steps[0].querySelector('span');
           if (firstCircle) {
               gsap.to(firstCircle, {
                   boxShadow: "0 0 0 4px rgba(229, 9, 36, 0.3)",
                   repeat: -1,
                   yoyo: true,
                   duration: 1.5,
                   ease: "sine.inOut"
               });
           }
        }
    }, { scope: containerRef });
}

export const useHomeAnimations = (containerRef) => {
  useGSAP(() => {
    // 1. Intro Section (#home-intro)
    const introSection = containerRef.current.querySelector('#home-intro');
    if (introSection) {
      const images = introSection.querySelectorAll('.lg\\:col-span-6.relative img');
      const icons = introSection.querySelectorAll('.lg\\:col-span-6.relative > div.z-20');
      const texts = introSection.querySelectorAll('.lg\\:pl-10 > *');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introSection,
          start: "top 75%",
          once: true,
        }
      });

      tl.from(images, { clipPath: 'inset(10% 10% 10% 10% round 32px)', scale: 1.1, duration: 1.2, stagger: 0.2, ease: "power3.inOut", clearProps: "all" })
        .from(icons, { scale: 0, rotation: -30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)", clearProps: "all" }, "-=0.8")
        .from(texts, { x: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", clearProps: "all" }, "-=1.0");
      
      // Floating animation for decorative icons
      if (icons.length > 0) {
        icons.forEach((icon, i) => {
          gsap.to(icon, {
            y: (i === 0 ? -25 : 25),
            duration: 2.5 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5
          });
        });
      }

      // Image Parallax for the front image
      if (images.length > 1) {
        gsap.to(images[1].parentElement, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: introSection, start: "top bottom", end: "bottom top", scrub: true }
        });
      }
    }

    // 2. Destinations Section (#home-destinations)
    const destSection = containerRef.current.querySelector('#home-destinations');
    if (destSection) {
      const headerElements = destSection.querySelectorAll('.max-w-2xl > *');
      const locationCards = Array.from(destSection.querySelectorAll('.destination-list > div.group'));
      const globeContainer = destSection.querySelector('.globe-container');
      
      const tl = gsap.timeline({
        scrollTrigger: { trigger: destSection, start: "top 75%", once: true }
      });

      tl.from(headerElements, { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", clearProps: "all" })
        .from(locationCards, { 
          x: -40,
          opacity: 0, 
          stagger: 0.1, 
          duration: 1, 
          ease: "expo.out", 
          clearProps: "all" 
        }, "-=0.6")
        .from(globeContainer, {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
          clearProps: "all"
        }, "-=1.0");
    }

    // 3. Services Section (#home-services)
    const servSection = containerRef.current.querySelector('#home-services');
    if (servSection) {
      const header = servSection.querySelector('.mb-8.text-center');
      const cards = Array.from(servSection.querySelectorAll('.grid > div'));
      
      const tl = gsap.timeline({
        scrollTrigger: { trigger: servSection, start: "top 80%", once: true }
      });

      tl.from(header, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", clearProps: "all" });
      
      cards.forEach((card, i) => {
        const icon = card.querySelector('.w-16');
        const title = card.querySelector('h3');
        const listItems = card.querySelectorAll('li');
        const link = card.querySelector('a');
        
        // 3D Flip entrance
        tl.from(card, { rotationX: -15, transformPerspective: 1000, y: 60, opacity: 0, duration: 0.8, ease: "power3.out", clearProps: "all" }, i === 0 ? "-=0.4" : "-=0.6");
        if (icon && title) tl.from([icon, title], { scale: 0.8, opacity: 0, duration: 0.4, stagger: 0.1, clearProps: "all" }, "-=0.4");
        if (listItems.length) tl.from(listItems, { x: -20, opacity: 0, stagger: 0.05, duration: 0.4, clearProps: "all" }, "-=0.4");
        if (link) tl.from(link, { opacity: 0, duration: 0.4, clearProps: "all" }, "-=0.3");

        // Interactive GSAP Hover
        if (icon) {
          card.addEventListener("mouseenter", () => gsap.to(icon, { y: -8, scale: 1.05, duration: 0.3, ease: "back.out(2)" }));
          card.addEventListener("mouseleave", () => gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" }));
        }
      });
    }

    // 4. Resources Section (#home-resources)
    const resSection = containerRef.current.querySelector('#home-resources');
    if (resSection) {
      const header = resSection.querySelector('.mb-8');
      const cards = resSection.querySelectorAll('.grid > div');
      
      const tl = gsap.timeline({
        scrollTrigger: { trigger: resSection, start: "top 80%", once: true }
      });

      tl.from(header, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out", clearProps: "all" })
        .from(cards, { 
          rotationZ: (i) => i % 2 === 0 ? 2 : -2,
          y: 40, 
          scale: 0.95,
          opacity: 0, 
          stagger: { each: 0.05, grid: [3,3], from: "start" }, 
          duration: 0.8, 
          ease: "back.out(1.5)", 
          clearProps: "all" 
        }, "-=0.4");
        
      cards.forEach(card => {
        card.addEventListener("mouseenter", () => gsap.to(card, { y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", duration: 0.3, ease: "power2.out" }));
        card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3, ease: "power2.out" }));
      });
    }

    // 5. Contact Section (#home-contact)
    const contactSection = containerRef.current.querySelector('#home-contact');
    if (contactSection) {
      const leftCol = contactSection.querySelector('.grid > div:first-child');
      const rightCol = contactSection.querySelector('.bg-white.rounded-2xl');
      
      const tl = gsap.timeline({
        scrollTrigger: { trigger: contactSection, start: "top 75%", once: true }
      });

      tl.from(leftCol.children, { x: -40, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out", clearProps: "all" })
        .from(rightCol, { rotationY: -10, transformPerspective: 1000, x: 40, opacity: 0, duration: 1, ease: "power3.out", clearProps: "all" }, "-=0.6");
    }

  }, { scope: containerRef });
};

export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};
