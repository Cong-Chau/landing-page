"use client";
import { useEffect, useRef } from "react";

import { ArrowRight } from "lucide-react";
function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate");
          } else {
            target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (spanRef.current) {
      observer.observe(spanRef.current);
    }
    if (btnRef.current) {
      observer.observe(btnRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" className="h-screen scroll-mt-16">
      <div className="w-full absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-lg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center ">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-7xl max-w-200 mt-30 text-white font-bold 2xl:text-9xl 2xl:max-w-400 2xl:mt-40 fade-in-up"
        >
          Leading the Future of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Server Technology
          </span>
        </h1>

        <span
          ref={spanRef}
          className="hidden sm:block text-white text-2xl mt-8 max-w-190 fade-in-up stagger-2"
        >
          Maxius is the only self-developed semiconductor company focused on
          High-Performance Servers. We deliver specialized solutions for the
          global IT industry.
        </span>
        <div
          ref={btnRef}
          className="inline-flex p-[2px] rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mt-16 hover:scale-110 transition-transform duration-300 fade-in-up stagger-4"
        >
          <button className="flex flex-row items-center gap-2 px-4 py-2 bg-black text-white rounded-2xl hover:bg-transparent transition cursor-pointer">
            <span className="text-2xl">Get Started</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
