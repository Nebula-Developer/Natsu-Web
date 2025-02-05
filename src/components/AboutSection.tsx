import type React from "react";
import { Code, Zap, Shield, Sparkles } from "lucide-preact";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: preact.VNode;
  title: string;
  description: string;
}) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-pink-500/20 transition duration-300">
    <div className="flex items-center gap-3 flex-wrap">
        <div className="*:h-12 *:w-12 text-pink-500 mb-4">{Icon}</div>
        <h3 className="text-xl font-semibold text-pink-100 mb-2 -mt-2">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-400 mb-4">
            About Natsu Framework
          </h2>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Natsu is more than just a framework. It's a blazing-fast ecosystem
            designed to supercharge your C# development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>}
            title="Lightning Fast"
            description="Experience unparalleled performance with our optimized runtime engine."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
            title="Developer Friendly"
            description="Intuitive APIs and comprehensive documentation for a smooth development experience."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>}
            title="Secure by Design"
            description="Built-in security features to protect your applications from common vulnerabilities."
          />
          <FeatureCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>}
            title="Modern C# Features"
            description="Leverage the latest C# language features and patterns in your projects."
          />
        </div>
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
            <a
              href="https://github.com/nebula-developer/natsu/wiki"
              className="block bg-gray-900 hover:bg-gray-800 transition duration-300 text-pink-100 font-semibold py-3 px-8 rounded-md hover:shadow-lg shadow-pink-500/50"
            >
              Explore Natsu Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
