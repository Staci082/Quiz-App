import { useState } from 'react'
import './App.css'

function App() {

  const categories = [
    {
      title: "History",
      color: "purple",
      img: "https://img.icons8.com/3d-fluency/94/scroll.png",
      alt: "history scroll"
    },
    {
      title: "Science",
      color: "cyan",
      img: "https://img.icons8.com/3d-fluency/94/biotech.png",
      alt: "dna strand"
    },
    {
      title: "Geography",
      color: "emerald",
      img: "https://img.icons8.com/3d-fluency/94/the-earths-inner-core.png",
      alt: "earth inner core"
    },
    {
      title: "Entertainment",
      color: "red",
      img: "https://img.icons8.com/3d-fluency/94/retro-tv.png",
      alt: "retro tv"
    },
  ]
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
      <h1 className="text-5xl font-bold absolute top-10 left-0 right-0">
      Quiz App
    </h1>

<main className="grid grid-cols-2 gap-6">

  { categories.map((item) => (
    <button href="#_" className={`flex-col w-38 h-28 rounded-md relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-${item.color}-600 active:shadow-none shadow-lg bg-gradient-to-tr from-${item.color}-400 to-${item.color}-600 border-${item.color}-700 text-white`}>
<span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-32 group-hover:h-32 opacity-10"></span>
<img width="90" height="90" src={item.img} alt={item.alt} className="absolute bottom-10"/>
<span className="relative text-xl mt-12">{item.title}</span>
</button>
  ))}




 {/* onClick={fetchQuestions}  */}
    {/* <button className="card h-40 w-40 flex justify-center items-center rounded bg-gradient-to-t from-cyan-500 to-blue-400">
        <h4 className="card-title text-3xl my-3">All</h4>
    </button> */}


    </main>
    </>
  )
}

export default App
