import { Flame } from "lucide-preact";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-pink-100 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
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
          <span className="text-xl font-bold">Natsu</span>
        </a>
        <ul className="flex *:py-1 sm:*:py-0 sm:space-x-6 sm:flex-row sm:items-start items-center flex-col">
          <a href="/" className="hover:text-pink-400 transition duration-150">
            Home
          </a>
          <a
            href="/#about"
            className="hover:text-pink-400 transition duration-150"
          >
            About
          </a>
          <a
            href="https://github.com/nebula-developer/natsu/wiki"
            className="hover:text-pink-400 transition duration-150"
          >
            Docs
          </a>
        </ul>
        <a
          href="/install"
          className="bg-pink-600 hover:bg-pink-700 text-white px-2 sm:px-4 py-3 sm:py-2 sm:text-base text-xs rounded transition duration-150"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
