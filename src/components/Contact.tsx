"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useRef } from "react";

function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const listRef = useRef<Array<HTMLDivElement | null>>([]);
  const formRef = useRef<HTMLDivElement>(null);
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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-16 py-20 px-6 bg-white text-zinc-800 flex flex-col items-center"
    >
      {/* title */}
      <div ref={titleRef} className="text-center mb-12 max-w-3xl fade-in">
        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold mb-6">
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Ready to revolutionize your server infrastructure? Let's discuss how
          Maxius can deliver high-performance solutions for your IT sector.
        </p>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        {/* Left Contact Info */}
        <div className="space-y-8">
          <h2
            ref={contentRef1}
            className="text-2xl font-semibold fade-in-left stagger-1"
          >
            Let's Start a Conversation
          </h2>
          <p ref={contentRef2} className="text-zinc-600 fade-in-left stagger-2">
            We're here to help you understand how our self-developed
            semiconductor technology can transform your server performance.
            Let's discuss your specific IT sector needs and how we can provide
            tailored solutions.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div
              ref={(el) => {
                if (el) listRef.current[0] = el;
              }}
              className="flex items-start gap-4 fade-in-left stagger-3"
            >
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-sm text-zinc-600">support@maxius.io</p>
                <p className="text-sm text-zinc-500">
                  Get in touch for server solutions
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              ref={(el) => {
                if (el) listRef.current[1] = el;
              }}
              className="flex items-start gap-4 fade-in-left stagger-4"
            >
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-sm text-zinc-600">+82 (0)2-123-4567</p>
                <p className="text-sm text-zinc-500">
                  Mon–Fri from 9am to 6pm KST
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              ref={(el) => {
                if (el) listRef.current[2] = el;
              }}
              className="flex items-start gap-4 fade-in-left stagger-5"
            >
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-sm text-zinc-600">Seoul, South Korea</p>
                <p className="text-sm text-zinc-500">
                  Our semiconductor R&D center
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div
          ref={formRef}
          className="bg-zinc-50 p-8 rounded-2xl shadow-md space-y-6 fade-in-right"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={5}
            placeholder="Message *"
            className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition">
            Send Message <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
