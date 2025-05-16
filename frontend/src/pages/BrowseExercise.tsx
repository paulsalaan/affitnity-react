import { Link } from "react-router-dom";
import Category from "../components/Category";
import { useState } from "react";
import Footer from "../pages/Footer";

export default function BrowseExercise() {
  const [selected, setSelected] = useState<string | null>(null);

  const descriptions: Record<string, string> = {
    Cardio:
      "Burpees are a high-intensity cardio workout that burns calories fast.",
    Strength: "Burpees build muscle endurance and strength in the upper body.",
    "Easy-to-do": "Burpees are beginner-friendly and require no equipment.",
    Flexible: "Burpees improve flexibility through full-body motion.",
  };

  const handleCardClick = (category: string) => {
    setSelected(category);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <>
      <div>
        {/* browse hero and search icon */}
        <div className="flex flex-col items-center justify-center text-center my-15">
          <h1 className="text-2xl font-bold mb-2 sm:text-3xl md:text-4xl">
            Welcome to <span className="text-blue-600">Workout Gallery</span>
          </h1>
          <p className="text-[13px] text-gray-500 mb-5 sm:text-sm md:text-base">
            Where you can try new different styles of <br />
            routines and exercise
          </p>
          {/* search container */}
          <div className="flex items-center gap-2">
            <input
              className="bg-gray-200 py-1 px-3 text-[12px] h-9 text-moss-black w-65 md:w-80 rounded-lg placeholder:text-[12px] placeholder:font-manrope focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Search any routines..."
              type="text"
            />
            <div className="bg-blue-600 hover:bg-blue-700 transition-color duration-200 inline-block px-3 h-9 py-1 rounded-lg text-white">
              <Link to="/">Search</Link>
            </div>
          </div>

          {/* categories container */}
          <div className="flex items-center justify-center gap-2 mt-3 font-dmsans">
            <Category
              text={"All"}
              containerClass="bg-gray-300 hover:bg-moss-black hover:text-snow-white transition-color duration-300 px-2.5 py-1 rounded-md"
              textClass="font-aeonik font-regular text-xs"
            />
            <Category
              text={"Cardio"}
              containerClass="bg-gray-300 hover:bg-moss-black hover:text-snow-white transition-color duration-300 px-2.5 py-1 rounded-md"
              textClass="font-aeonik font-regular text-xs"
            />
            <Category
              text={"Strength"}
              containerClass="bg-gray-300 hover:bg-moss-black hover:text-snow-white transition-color duration-300 px-2.5 py-1 rounded-md"
              textClass="font-aeonik font-regular text-xs"
            />
            <Category
              text={"Easy-to-do"}
              containerClass="bg-gray-300 hover:bg-moss-black hover:text-snow-white transition-color duration-300 px-2.5 py-1 rounded-md"
              textClass="font-aeonik font-regular text-xs"
            />
            <Category
              text={"Flexible"}
              containerClass="bg-gray-300 hover:bg-moss-black hover:text-snow-white transition-color duration-300 px-2.5 py-1 rounded-md"
              textClass="font-aeonik font-regular text-xs"
            />
          </div>
        </div>

        <div className="cursor-pointer grid grid-cols-1 gap-2 mx-5 sm:grid-cols-2 sm:h-screen md:grid-cols-4">
          {/* CARD 1 */}
          <div
            onClick={() => handleCardClick("Cardio")}
            className="relative bg-[url('https://images.pexels.com/photos/4720537/pexels-photo-4720537.jpeg')] bg-cover bg-center h-60 rounded-lg"
          >
            <div className="absolute flex flex-col bottom-0 mb-5 ml-5 text-white gap-2">
              <h1 className="text-2xl font-bold">Burpees</h1>
              <p className="text-sm bg-yellow-500 rounded-md py-1 text-center px-2 text-black">
                Cardio
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            onClick={() => handleCardClick("Strength")}
            className="relative bg-[url('https://images.pexels.com/photos/4720537/pexels-photo-4720537.jpeg')] bg-cover bg-center h-60 rounded-lg"
          >
            <div className="absolute flex flex-col bottom-0 mb-5 ml-5 text-white gap-2">
              <h1 className="text-2xl font-bold">Burpees</h1>
              <p className="text-sm bg-orange-400 rounded-md py-1 text-center px-2 text-black">
                Strength
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            onClick={() => handleCardClick("Easy-to-do")}
            className="relative bg-[url('https://images.pexels.com/photos/4720537/pexels-photo-4720537.jpeg')] bg-cover bg-center h-60 rounded-lg"
          >
            <div className="absolute flex flex-col bottom-0 mb-5 ml-5 text-white gap-2">
              <h1 className="text-2xl font-bold">Burpees</h1>
              <p className="text-sm bg-teal-400 rounded-md py-1 text-center px-2 text-black">
                Easy-to-do
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            onClick={() => handleCardClick("Flexible")}
            className="relative bg-[url('https://images.pexels.com/photos/4720537/pexels-photo-4720537.jpeg')] bg-cover bg-center h-60 rounded-lg"
          >
            <div className="absolute flex flex-col bottom-0 mb-5 ml-5 text-white gap-2">
              <h1 className="text-2xl font-bold">Burpees</h1>
              <p className="text-sm bg-purple-400 rounded-md py-1 text-center px-2 text-black">
                Flexible
              </p>
            </div>
          </div>
        </div>

        {/* MODAL OVERLAY */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-10">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative">
              <button
                onClick={handleClose}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-2">Burpees - {selected}</h2>
              <p className="text-gray-700">{descriptions[selected]}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
