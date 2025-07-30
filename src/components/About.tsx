"use client";

import { CheckCircle, Target, Award, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const listRef = useRef<Array<HTMLLIElement | null>>([]);
  const bannerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement[]>([]);
  // On view
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
        threshold: 0.6,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (contentRef1.current) {
      observer.observe(contentRef1.current);
    }

    if (contentRef2.current) {
      observer.observe(contentRef2.current);
    }

    listRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    valuesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Innovation-Driven",
      description:
        "We're committed to developing breakthrough semiconductor technology for high-performance computing.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Performance Excellence",
      description:
        "We strive for excellence in server performance, delivering solutions that exceed industry standards.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Industry-Focused",
      description:
        "Our specialized solutions are tailored to meet the unique needs of different IT industry sectors.",
    },
  ];
  return (
    <section
      id="about"
      className="scroll-mt-16 min-h-screen flex flex-col items-center px-6 py-16 bg-black/2 backdrop-blur-lg text-zinc-800"
    >
      {/* Title */}
      <div ref={titleRef} className="text-center mb-12 max-w-3xl fade-in">
        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Maxius
          </span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          The only self-developed semiconductor company that focuses on
          developing <strong>High-Performance Servers</strong> for the global IT
          industry.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mb-16">
        {/* Left Text Content */}
        <div className="flex-1">
          <h2
            ref={contentRef1}
            className="text-2xl font-semibold mb-4 text-zinc-900 fade-in-left stagger-1"
          >
            Pioneering Server Technology Innovation
          </h2>
          <p
            ref={contentRef2}
            className="mb-6 text-zinc-600 fade-in-left stagger-2"
          >
            Maxius stands as the only self-developed semiconductor company
            dedicated exclusively to High-Performance Server technology. We
            provide specialized solutions tailored towards different sectors of
            the IT industry and strive to break into the global market as a
            leader in server technology. Our commitment to innovation drives us
            to develop cutting-edge semiconductor solutions that power the
            world's most demanding computing environments.
          </p>
          <ul className="space-y-3">
            {[
              "Self-developed semiconductor technology",
              "High-Performance Server specialization",
              "Tailored solutions for IT sectors",
              "Global market leadership vision",
            ].map((item, index) => (
              <li
                key={item}
                ref={(el) => {
                  if (el) listRef.current[index] = el;
                }}
                className={`flex items-center gap-2 text-green-500 fade-in-left stagger-${
                  3 + index
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Banner */}
        <div className="flex-1">
          <div
            ref={bannerRef}
            className="w-full h-[400px] rounded-3xl  flex items-center justify-center shadow-lg fade-in-right "
          >
            <img
              src="/images/rightside.jpg"
              alt="Maxius Banner"
              className="w-full h-full object-cover rounded-3xl "
            />
          </div>
        </div>
      </div>

      {/* Value of maxius */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {values.map((value, index) => (
          <div
            ref={(el) => {
              if (el) valuesRef.current[index] = el;
            }}
            key={index}
            className={`max-w-100 text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-lift fade-in`}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white mb-4 mx-auto">
              {value.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {value.title}
            </h4>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
