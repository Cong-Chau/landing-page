"use client";

import type React from "react";

import {
  Cpu,
  Server,
  Brain,
  Blocks,
  Database,
  Network,
  Globe,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

function Features() {
  const categories = ["Product", "Technology", "Application", "Blockchain"];
  const [selectedCategory, setSelectedCategory] = useState<string>("Product");
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    // Technology
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: "Self-Developed Semiconductors",
      description:
        "Based on more than 20 years of research know-how, we are the only company in Korea making HPC servers using self-developed system semiconductors.",
      category: "Technology",
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Intelligent Data Center Solutions",
      description:
        "Specialized solutions for intelligent data centers in the IT industry, providing differentiated products and solutions.",
      category: "Technology",
    },
    {
      icon: <Network className="h-8 w-8 text-blue-600" />,
      title: "Advanced Research & Development",
      description:
        "Over 20 years of research know-how and technology development, making us the only company in Korea with this capability.",
      category: "Technology",
    },
    // Products
    {
      icon: <Server className="h-8 w-8 text-purple-600" />,
      title: "High-Performance Servers",
      description:
        "Extensive selection of serviceable capabilities with self-manufactured semiconductors, building the latest storage technology.",
      category: "Product",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "IDC Infrastructure",
      description:
        "Building IDC incorporating the latest storage technology applicable to various I/O devices for optimal performance.",
      category: "Product",
    },
    {
      icon: <Network className="h-8 w-8 text-purple-600" />,
      title: "Storage Solutions",
      description:
        "Latest storage technology applicable to various I/O devices, optimized for high-performance computing environments.",
      category: "Product",
    },
    // Applications
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI/Genetic Analysis",
      description:
        "Advanced AI processing and genetic analysis capabilities for research, healthcare, and scientific applications.",
      category: "Application",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Data Analysis & Processing",
      description:
        "Vast data analysis capabilities and distributed processing functions for big data, business intelligence, and analytics.",
      category: "Application",
    },
    {
      icon: <Network className="h-8 w-8 text-purple-600" />,
      title: "IDC Centers",
      description:
        "Intelligent data center solutions with optimized storage and processing capabilities for enterprise applications.",
      category: "Application",
    },
    // Blockchain
    {
      icon: <Blocks className="h-8 w-8 text-blue-600" />,
      title: "Blockchain Solutions",
      description:
        "Various blockchain solutions including IPFS for decentralized storage, optimized for decentralized storage and Web3.0 applications.",
      category: "Blockchain",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Metaverse & Web3.0",
      description:
        "Storage and service solutions utilized in Metaverse, IPFS Storage and Application Services for the next generation web.",
      category: "Blockchain",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "IPFS Storage",
      description:
        "InterPlanetary File System integration for decentralized storage and content distribution in blockchain networks.",
      category: "Blockchain",
    },
  ];

  useEffect(() => {
    const updateAnimationClasses = () => {
      const isSmallScreen = window.innerWidth < 640;

      featuresRef.current.forEach((el, index) => {
        if (el) {
          // Remove existing animation classes
          el.classList.remove("fade-in-up", "fade-in-left", "fade-in-right");

          // Add appropriate animation class based on screen size
          if (isSmallScreen) {
            const animationClass =
              index % 2 === 0 ? "fade-in-left" : "fade-in-right";
            el.classList.add(animationClass);
          } else {
            el.classList.add("fade-in-up");
          }
        }
      });
    };

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
        threshold: 0.25,
      }
    );

    // Update animation classes initially
    updateAnimationClasses();

    // Add resize listener to update animation classes when screen size changes
    window.addEventListener("resize", updateAnimationClasses);

    if (title1Ref.current) {
      observer.observe(title1Ref.current);
    }
    if (title2Ref.current) {
      observer.observe(title2Ref.current);
    }
    if (btnRef.current) {
      observer.observe(btnRef.current);
    }
    featuresRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateAnimationClasses);
    };
  }, [selectedCategory]);

  const filteredFeatures = features.filter(
    (feature) => feature.category === selectedCategory
  );

  return (
    <section
      id="feature"
      className="min-h-[calc(100vh-4rem)] scroll-mt-16 py-20 bg-white text-center flex flex-col items-center px-4"
    >
      {/* title */}
      <h1
        ref={title1Ref}
        className="text-4xl md:text-5xl 2xl:text-7xl font-bold mb-6 fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        Comprehensive{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Solutions
        </span>
      </h1>
      <p
        ref={title2Ref}
        className="max-w-3xl text-gray-700 text-lg 2xl:text-xl mb-12 fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200"
      >
        From self-developed semiconductors to blockchain solutions, Maxius
        provides specialized technology across multiple sectors of the IT
        industry.
      </p>

      {/* Categories */}
      <div
        ref={btnRef}
        className="flex flex-wrap justify-center gap-4 mb-12 fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 border transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 hover:cursor-pointer"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {filteredFeatures.map((feature, index) => (
          <div
            key={`${selectedCategory}-${index}`}
            ref={(el) => {
              if (el) {
                featuresRef.current[index] = el;

                const isSmallScreen = window.innerWidth < 640;

                el.classList.remove(
                  "fade-in-up",
                  "fade-in-left",
                  "fade-in-right"
                );

                if (isSmallScreen) {
                  const animationClass =
                    index % 2 === 0 ? "fade-in-left" : "fade-in-right";
                  el.classList.add(animationClass);
                } else {
                  el.classList.add("fade-in-up");
                }
              }
            }}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 translate-y-8"
            style={{
              animationDelay: `${index * 100 + 600}ms`,
            }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="text-center mt-16 max-w-4xl fade-in-up opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-1000"
      >
        <p className="hidden sm:block text-lg text-gray-600 mb-6">
          Maxius continues to develop as a company in the global market by
          supplying a variety of products and solutions through R&D and
          communication.
        </p>
        <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center gap-4 text-sm text-gray-500">
          <span>Self-produced semiconductors</span>
          <span className="hidden sm:block">•</span>
          <span>High-Performance Servers</span>
          <span className="hidden sm:block">•</span>
          <span>Blockchain IDC construction</span>
          <span className="hidden sm:block">•</span>
          <span>IPFS solutions</span>
        </div>
      </div>
    </section>
  );
}

export default Features;
