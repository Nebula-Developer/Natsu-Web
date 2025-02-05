const Footer = () => {
  return (
    <footer className="bg-gray-900 text-pink-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="text-pink-500">
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-flame"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Natsu Framework</span>
            </a>
            <p className="mt-2 text-xs hidden xl:block">
              The last C# application framework you'll ever need.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#"
                  className="hover:text-pink-400 transition duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-pink-400 transition duration-150"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/install"
                  className="hover:text-pink-400 transition duration-150"
                >
                  Installing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nebula-developer/natsu/wiki"
                  className="hover:text-pink-400 transition duration-150"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nebula-Developer/Natsu/blob/master/LICENSE"
                  className="hover:text-pink-400 transition duration-150"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Source Code</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nebula-developer/natsu"
                className="flex gap-3 fill-pink-400 hover:fill-pink-300 text-pink-400 hover:text-pink-300 transition duration-150"
              >
                <svg
                  className="w-6 h-6"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="sr-">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Nebula Developments. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
