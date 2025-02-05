import AnimatedBackground from "./AnimatedBackground"

export default function NatsuHero() {
  return (
    <div className="sm:-mt-18 relative bg-gray-900 min-h-[max(min(1400px,100vh),500px)] flex items-center justify-center p-4 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 mb-6">
          Natsu Framework
        </h1>
        <p className="text-xl md:text-2xl text-pink-100 mb-8">
          The last C# application framework you'll ever need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/install"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition duration-150 ease-in-out"
          >
            Get Started
            <div className="ml-2 -mr-1 h-5 w-5 flex items-center justify-center">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </a>
          <a
            href="/#about"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-pink-200 bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

