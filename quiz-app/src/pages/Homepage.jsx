import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/dataContext";

function Homepage() {
    const categories = [
        {
            title: "General",

            img: "https://img.icons8.com/3d-fluency/94/lightning-bolt.png",
            alt: "lightning bolt",
        },
        {
            title: "History",
            img: "https://img.icons8.com/3d-fluency/94/scroll.png",
            alt: "history scroll",
        },
        {
            title: "Geography",
            img: "https://img.icons8.com/3d-fluency/94/the-earths-inner-core.png",
            alt: "earth inner core",
        },
        {
            title: "Math",
            img: "https://img.icons8.com/3d-fluency/94/calculator.png",
            alt: "calculator",
        },
        {
            title: "Music",
            img: "https://img.icons8.com/3d-fluency/94/rock-music.png",
            alt: "trumpet",
        },
        {
            title: "Mythology",
            img: "https://img.icons8.com/3d-fluency/94/lyre.png",
            alt: "lyre",
        },
        {
            title: "Video Games",
            img: "https://img.icons8.com/3d-fluency/94/controller.png",
            alt: "paint palette",
        },
        {
            title: "Animals",
            img: "https://img.icons8.com/3d-fluency/94/peacock.png",
            alt: "snail",
        },
        {
            title: "Science",
            img: "https://img.icons8.com/3d-fluency/94/biotech.png",
            alt: "dna strand",
        },
        {
            title: "Anime & Manga",
            img: "https://img.icons8.com/color/96/son-goku.png",
            alt: "goku",
        },
    ];
    const { handleStart } = useContext(DataContext);
    const [selectedAmount, setSelectedAmount] = useState(10);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showBottomElement, setShowBottomElement] = useState(false);

    const openBottomElement = (category) => {
        setSelectedCategory(category.toLowerCase());
        setShowBottomElement(true);
    };

    const closeBottomElement = () => {
        setSelectedCategory(null);
        setShowBottomElement(false);
    };




    const playLink = `/questions?category=${selectedCategory}&amount=${selectedAmount}&level=${selectedLevel}`;


    return (
        <>
            <section className="flex flex-col items-center py-8">
                <img width="48" height="48" src="https://img.icons8.com/color/96/kawaii-dinosaur--v2.png" alt="kawaii-dinosaur--v2" />
                <h1 className="text-4xl font-nanum font-bold mb-20">Quizilla</h1>

                <main className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 ">
                    {categories.map((item) => (
                        <button
                            onClick={() => openBottomElement(item.title)}
                            key={item.title}
                            className={`flex-col w-38 h-32 outline-white rounded-lg relative inline-flex group items-center justify-center px-3.5 py-2 m-1 border-b-4 border-l-2 active:border-lime-600 active:shadow-none shadow-lg bg-gradient-to-tr from-lime-400 to-lime-600 border-lime-700 text-white active:translate-y-2`}
                        >
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-24 group-hover:h-20 opacity-10"></span>
                            <img width="90" height="86" src={item.img} alt={item.alt} className="absolute bottom-12" />
                            <span className="relative text-2xl mt-16">{item.title}</span>
                        </button>
                    ))}
                </main>

                {showBottomElement && (
                    <div className="fixed bottom-0 p-10 pt-5 text-xl bg-gradient-to-bl from-teal-400 to-teal-600 border-teal-700 flex flex-col items-center gap-5 rounded-t-3xl lg:max-w-[35%] md:max-w-[50%] w-full">
                        <button onClick={closeBottomElement} className="flex justify-center items-center">
                            <div className="self-center w-10 cursor-pointer h-1 bg-gray-300 rounded-xl mb-5"></div>
                        </button>
                        <h2 className="text-lime-400 font-bold text-5xl mb-2">{selectedCategory}</h2>
                        <b>Amount of questions</b>
                        <div className="flex gap-4 justify-center" role="group">
                            <button onClick={() => setSelectedAmount(10)} className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">10</button>
                            <button onClick={() => setSelectedAmount(20)} className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">20</button>
                            <button onClick={() => setSelectedAmount(30)} className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">30</button>
                        </div>
                        <b>Difficulty level</b>
                        <div className="flex gap-4 justify-center" role="group">
                            <button onClick={() => setSelectedLevel("easy".toLowerCase())} className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">Easy</button>
                            <button onClick={() => setSelectedLevel("medium".toLowerCase())} className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">Medium</button>
                            <button onClick={() => setSelectedLevel("hard".toLowerCase())} className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">Hard</button>
                        </div>

                        <Link  to={playLink} onClick={handleStart} className="bg-white active:translate-y-1 text-lime-400 text-2xl py-1 mt-2 rounded-xl max-w-[450px] font-bold border-b-4 border-l-2 border-lime-400  min-w-[300px]">
                            Play
                        </Link>
                    </div>
                )}
            </section>
        </>
    );
}

export default Homepage;
