import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from '../context/ThemeContext';

function gaussianScale(distance, maxDistance, maxScale) {
  if (distance >= maxDistance) return 1;
  const t = 1 - distance / maxDistance;
  return 1 + (maxScale - 1) * Math.pow(t, 2.2);
}

const DockNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDark, toggleTheme } = useTheme();
  const mouseXRef = useRef(null);
  const iconRefs = useRef([]);
  const [scales, setScales] = useState([]);
  const rafRef = useRef(null);


  const navItems = [
    { icon: Home, label: "Home", href: "#home", section: "home" },
    { icon: User, label: "About", href: "#about", section: "about" },
    { icon: Briefcase, label: "Experience", href: "#experience", section: "experience" },
    { icon: Code, label: "Projects", href: "#projects", section: "projects" },
    { icon: Mail, label: "Contact", href: "#contact", section: "contact" },
  ];

  const socialItems = [
    { icon: Github, label: "GitHub", href: "https://github.com", external: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", external: true },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", external: true },
  ];

  const allItems = [...navItems, null, ...socialItems, null, { icon: isDark ? Sun : Moon, label: isDark ? "Light" : "Dark", action: toggleTheme }];
  const allItemsFlat = [...navItems, ...socialItems, { icon: isDark ? Sun : Moon, label: isDark ? "Light" : "Dark", action: toggleTheme }];

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(item.section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const computeScales = useCallback(() => {
    const mx = mouseXRef.current;
    if (mx === null) {
      setScales([]);
      return;
    }

    const newScales = iconRefs.current.map((el) => {
      if (!el) return 1;
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(mx - center);
      return gaussianScale(dist, 80, 1.5);
    });
    setScales(newScales);
    rafRef.current = requestAnimationFrame(computeScales);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      mouseXRef.current = e.clientX;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(computeScales);
      }
    },
    [computeScales]
  );

  const handleMouseLeave = useCallback(() => {
    mouseXRef.current = null;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setScales([]);
    setHoveredIndex(null);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleClick = (e, item) => {
    if (item.action) {
      e.preventDefault();
      item.action();
    } else if (item.href && !item.href.startsWith("http")) {
      e.preventDefault();
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(item.section);
    }
  };

  let flatIndex = -1;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 select-none">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative px-5 py-3 rounded-2xl bg-white/80 dark:bg-[#1C1C1E]/90 backdrop-blur-[28px] border border-white/50 dark:border-[#3A3A3C]/50 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.3)] transition-colors duration-300"
      >
        <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none bg-gradient-to-r from-transparent via-white/90 dark:via-[#3A3A3C]/50 to-transparent transition-colors duration-300" />

        <div className="flex items-end gap-1">
          {allItems.map((item, allIdx) => {
            if (item === null) {
              return (
                <div
                  key={`divider-${allIdx}`}
                  className="self-stretch mx-2 my-1 w-px rounded-full bg-neutral-300 dark:bg-[#3A3A3C] transition-colors duration-300"
                />
              );
            }

            flatIndex++;
            const currentFlatIndex = flatIndex;
            const Icon = item.icon;
            const isActive = item.section === activeSection;
            const scale = scales[currentFlatIndex] ?? 1;
            const lift = Math.max(0, (scale - 1) * 20);
            const isHovered = hoveredIndex === currentFlatIndex;

            return (
              <div
                key={item.label}
                ref={(el) => (iconRefs.current[currentFlatIndex] = el)}
                className="relative flex flex-col items-center"
                style={{ width: 44 }}
                onMouseEnter={() => setHoveredIndex(currentFlatIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-neutral-900/95 dark:bg-[#2C2C2E]/95 text-white text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-lg shadow-lg pointer-events-none transition-all duration-150"
                  style={{
                    bottom: `calc(100% + ${lift + 12}px)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  {item.label}
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900/95 dark:bg-[#2C2C2E]/95 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                </div>

                <a
                  href={item.href || "#"}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleClick(e, item)}
                  aria-label={item.label}
                  className="flex items-center justify-center"
                  style={{ width: 44, height: 44 }}
                >
                  <div
                    style={{
                      transform: `scale(${scale}) translateY(-${lift}px)`,
                      transition: scales.length === 0 ? "transform 0.4s cubic-bezier(0.22,1,0.36,1)" : "none",
                    }}
                    className="flex items-center justify-center relative"
                  >
                    <div
                      className="absolute inset-[-6px] rounded-full transition-colors duration-200"
                      style={{
                        background: isActive
                          ? "rgba(37,99,235,0.12)"
                          : isHovered
                          ? "rgba(37,99,235,0.07)"
                          : "transparent",
                      }}
                    />
                    <Icon
                      size={26}
                      strokeWidth={isActive ? 2.2 : 1.7}
                      className="relative z-[1] text-neutral-900 dark:text-[#F5F5F7] transition-colors duration-300"
                      style={{
                        color: isActive ? "#2563EB" : undefined,
                        filter: isHovered ? "drop-shadow(0 2px 8px rgba(37,99,235,0.3))" : "none",
                        transition: "color 0.2s ease, stroke-width 0.2s ease, filter 0.2s ease",
                      }}
                    />
                  </div>
                </a>

                <div
                  className="w-1 h-1 rounded-full mt-0.5 transition-all duration-250"
                  style={{
                    background: isActive ? "#2563EB" : "transparent",
                    boxShadow: isActive ? "0 0 6px rgba(37,99,235,0.6)" : "none",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DockNav;
