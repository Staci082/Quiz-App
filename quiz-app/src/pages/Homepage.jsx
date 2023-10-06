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
            title: "Mythology",
            color: "orange",
            img: "https://img.icons8.com/3d-fluency/94/lyre.png",
            alt: "lyre",
        },
        {
            title: "Art",
            color: "yellow",
            img: "https://img.icons8.com/3d-fluency/94/paint-palette.png",
            alt: "paint palette",
        },
    ];

    const [showBottomElement, setShowBottomElement] = useState(false);

    const openBottomElement = () => {
        setShowBottomElement(true);
    };

    const closeBottomElement = () => {
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
            <section className="flex flex-col items-center text-center bg-zinc-900 text-white min-h-full">
                <h1 className="text-5xl font-bold mt-8 mb-20">Quiz App</h1>

                <main className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {categories.map((item) => (
                        <button
                            onClick={openBottomElement}
                            key={item.title}
                            className={`flex-col w-38 h-28 outline-white rounded-md relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-lime-600 active:shadow-none shadow-lg bg-gradient-to-tr from-lime-400 to-lime-600 border-lime-700 text-white active:translate-y-2`}
                        >
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-24 group-hover:h-20 opacity-10"></span>
                            <img width="90" height="90" src={item.img} alt={item.alt} className="absolute bottom-10" />
                            <span className="relative text-xl mt-16">{item.title}</span>
                        </button>
                    ))}
                </main>

                {showBottomElement && (
                    <div className="fixed bottom-0 p-10 pt-5 bg-gradient-to-bl from-lime-400 to-lime-600 border-lime-700 flex flex-col gap-5 rounded-t-xl">
                        <button onClick={closeBottomElement} className="flex justify-center items-center">
                            <div className="self-center w-10 cursor-pointer h-1 bg-gray-300 rounded-xl mb-7"></div>
                        </button>
                        <b>Choose the level</b>
                        <div className="flex gap-4">
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl">Easy</button>
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl">Medium</button>
                            <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl">Hard</button>
                        </div>
                        <button className="bg-white text-lime-600 py-2 rounded-xl">Play</button>
                    </div>
                )}
            </section>
        </>
    );
}

export default Homepage