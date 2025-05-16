// react modules
import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

// import screens
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

// open source icons

export default function WorkoutGallery() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // locks the scrolling effect
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      // unlocks the scrolling effect
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // cleanup function to ensure the class is removed when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        {/* header section */}
        <div className="flex items-center justify-between p-5 sm:p-5">
          {/* logo text */}
          <h1 className="font-aeonik font-bold text-2xl text-moss-black">
            Af<span className="text-brand">fit</span>nity
          </h1>

          {/* nav links */}
          {/* <NavLinks /> */}

          <div className="hidden border border-moss-black rounded-lg p-2 sm:flex sm:gap-3">
            <div className="bg-gray-400 w-7 h-7 rounded-2xl"></div>
            <Link to="/">Mike Philip</Link>
          </div>

          {/* Mobile-only menu button */}
          {!isOpen && (
            <button onClick={toggleMenu} className="block z-20 sm:hidden">
              <Bars2Icon className="size-7 text-moss-black" />
            </button>
          )}

          {/* Mobile Nav Links */}
          {isOpen && (
            <div className="bg-snow-white z-20 h-full w-full flex flex-col absolute top-0 left-0 p-5 sm:hidden">
              {/* Close Button */}
              <button onClick={toggleMenu} className="self-end mt-1 mb-5">
                <XMarkIcon className="size-7 text-moss-black" />
              </button>

              {/* open nav links for mobile */}
              <div className="flex flex-col self-end text-right font-aeonik font-medium text-lg gap-4">
                {/* <Link to="/">Home</Link>
                <Link to="/" className="text-brand">
                  My Plan
                </Link>
                <Link to="/" className="text-blue-600">
                  Workout Gallery
                </Link>
                <Link to="/">Services</Link>
                <Link to="/">Contacts</Link> */}
              </div>

              <div className="flex flex-row-reverse items-center justify-center gap-5 absolute self-end bottom-0 mb-3">
                <div className="w-10 h-10 rounded-4xl bg-gray-600"></div>
                <h1 className="font-aeonik font-medium text-xl">Mike Philip</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
