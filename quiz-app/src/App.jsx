import { useState } from "react";
import "./App.css";

function App() {
    const categories = [
        {
            title: "History",
            color: "purple",
            img: "https://img.icons8.com/3d-fluency/94/scroll.png",
            alt: "history scroll",
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
            title: "Entertainment",
            color: "red",
            img: "https://img.icons8.com/3d-fluency/94/retro-tv.png",
            alt: "retro tv",
        },
        {
          title: "Entertainment",
          color: "red",
          img: "https://img.icons8.com/3d-fluency/94/retro-tv.png",
          alt: "retro tv",
      },
      {
        title: "Entertainment",
        color: "red",
        img: "https://img.icons8.com/3d-fluency/94/retro-tv.png",
        alt: "retro tv",
    },
      {
          title: "Entertainment",
          color: "red",
          img: "https://img.icons8.com/3d-fluency/94/retro-tv.png",
          alt: "retro tv",
      },
      {
        title: "Entertainment",
        color: "red",
        img: "https://img.icons8.com/3d-fluency/94/retro-tv.png",
        alt: "retro tv",
    },
    ];
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
        <body className="flex flex-col items-center   min-h-full max-w-320">
        
            <h1 className="text-5xl font-bold mt-4 mb-12">Quiz App</h1>

            <main className="grid grid-cols-2 gap-6">
                {categories.map((item) => (
                    <button
                        href="#_"
                        key={item.title}
                        className={`flex-col w-38 h-28 rounded-md relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-lime-600 active:shadow-none shadow-lg bg-gradient-to-tr from-lime-400 to-lime-600 border-lime-700 text-white`}
                    >
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-32 group-hover:h-20 opacity-10"></span>
                        <img width="90" height="90" src={item.img} alt={item.alt} className="absolute bottom-10" />
                        <span className="relative text-xl mt-16">{item.title}</span>
                    </button>
                ))}

            </main>

            
            <div className="fixed bottom-0 p-10 bg-lime-500 flex flex-col gap-5 rounded-t-xl">
                    <b>Choose the Level</b>
                    <div className="flex gap-4">
                      <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl">Easy</button>
                      <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl">Medium</button>
                      <button className="border-solid border-2 border-white py-1 px-4 rounded-3xl">Hard</button>
                    </div>
                    <button className="bg-white text-lime-600 py-2 rounded-xl">Play</button>
            </div>

            </body>
        </>
    );
}

export default App;
