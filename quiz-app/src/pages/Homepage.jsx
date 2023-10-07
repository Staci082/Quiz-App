import { useState } from 'react'

function Homepage() {
    const categories = [
        {
            title: "General",
            color: "green",
            img: "https://img.icons8.com/3d-fluency/94/lightning-bolt.png",
            alt: "lightning bolt",
        },
        {
            title: "History",
            color: "purple",
            img: "https://img.icons8.com/3d-fluency/94/scroll.png",
            alt: "history scroll",
        },
        {
            title: "Geography",
            color: "emerald",
            img: "https://img.icons8.com/3d-fluency/94/the-earths-inner-core.png",
            alt: "earth inner core",
        },
        {
            title: "Music",
            color: "red",
            img: "https://img.icons8.com/3d-fluency/94/trumpet.png",
            alt: "trumpet",
        },
        {
            title: "Art",
            color: "yellow",
            img: "https://img.icons8.com/3d-fluency/94/paint-palette.png",
            alt: "paint palette",
        },
        {
            title: "Mythology",
            color: "orange",
            img: "https://img.icons8.com/3d-fluency/94/lyre.png",
            alt: "lyre",
        },
        {
            title: "Animals",
            color: "pink",
            img: "https://img.icons8.com/3d-fluency/94/snail.png",
            alt: "snail",
        },
        {
            title: "Science",
            color: "cyan",
            img: "https://img.icons8.com/3d-fluency/94/biotech.png",
            alt: "dna strand",
        },
    ];
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showBottomElement, setShowBottomElement] = useState(false);

    const openBottomElement = (category) => {
        setSelectedCategory(category);
        setShowBottomElement(true);
    };

    const closeBottomElement = () => {
        setSelectedCategory(null);
        setShowBottomElement(false);
    };

    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //   // Fetch the list of categories when the component mounts
    //   fetch('https://opentdb.com/api_category.php')
    //     .then(response => response.json())
    //     .then(data => setCategories(data.categories))
    //     .catch(error => console.error(error));
    // }, []);

    // useEffect(() => {
    //   // Log categories when it changes
    //   console.log(categories);
    // }, [categories]);
    return (
        <>
            <section className="flex flex-col items-center py-8">
                <h1 className="text-5xl font-bold mb-20">Quiz App</h1>

                <main className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {categories.map((item) => (
                        <button
                            onClick={() => openBottomElement(item.title)}
                            key={item.title}
                            className={`flex-col w-38 h-28 outline-white rounded-lg relative inline-flex group items-center justify-center px-3.5 py-2 m-1 border-b-4 border-l-2 active:border-lime-600 active:shadow-none shadow-lg bg-gradient-to-tr from-lime-400 to-lime-600 border-lime-700 text-white active:translate-y-2`}
                        >
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-24 group-hover:h-20 opacity-10"></span>
                            <img width="90" height="90" src={item.img} alt={item.alt} className="absolute bottom-10" />
                            <span className="relative text-xl mt-16">{item.title}</span>
                        </button>
                    ))}
                </main>

                {showBottomElement && (
                    <div className="fixed bottom-0 p-10 pt-5 bg-gradient-to-bl from-teal-400 to-teal-600 border-teal-700 flex flex-col items-center gap-5 rounded-t-3xl lg:max-w-[35%] md:max-w-[50%] w-full">
                        <button onClick={closeBottomElement} className="flex justify-center items-center">
                            <div className="self-center w-10 cursor-pointer h-1 bg-gray-300 rounded-xl mb-5"></div>
                        </button>
                        <h2 className="text-lime-400 font-bold text-3xl mb-2">{selectedCategory}</h2>
                        <b>Amount of questions</b>
                        <div className="flex gap-4 justify-center" role="group">
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">10</button>
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">20</button>
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">30</button>
                        </div>
                        <b>Difficulty level</b>
                        <div className="flex gap-4 justify-center" role="group">
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">Easy</button>
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">Medium</button>
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl focus:ring focus:ring-lime-400">Hard</button>
                        </div>
                        
                        <a href="/questions" className="bg-white active:translate-y-1 text-lime-400 py-2 mt-2 rounded-xl max-w-[500px] font-bold border-b-4 border-l-2 border-lime-400  min-w-[300px]">Play</a>
                    </div>
                )}
            </section>
        </>
    );
}

export default Homepage