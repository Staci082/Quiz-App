import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import DataContext from "../context/dataContext";

function Results() {
    const { selectedCategory, selectedAmount, selectedDifficulty } = useContext(DataContext);

    const questionsLink = `/questions?category=${selectedCategory}&amount=${selectedAmount}&Difficulty=${selectedDifficulty}`;
    return (
        <>
            <section className=" py-8 flex flex-col items-center pb-6 gap-6">
                <div className="flex flex-col items-center gap-6">
                <img width="94" height="94" src="https://img.icons8.com/color/96/kawaii-dinosaur--v2.png" alt="christmas-star"/>
                    <b className="text-4xl">You win!</b>
                </div>

                <div className="relative bg-teal-400 rounded-lg h-80 w-80 flex flex-col items-center justify-end mb-6">
                    <div className="absolute top-5 left-5">
                    <p>Quiz type</p>
                    <b>{selectedCategory}</b>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <GoDotFill className="text-lime-400"/>
                        <p>Correct</p>
                        <p className="text-teal-600 ml-1"> 80%</p>
                        </div>
                        <div className="flex items-center gap-1">
                        <GoDotFill/>
                        <p>Incorrect </p>
                        <p className="text-teal-600 ml-1"> 20%</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-4 w-80 ">
                    <a href="/" className="bg-teal-400 active:translate-y-1 text-3xl border-b-4 border-l-2 border-teal-600 rounded-lg basis-1/2 py-2">Home</a>
                    <a href={questionsLink} className="bg-lime-400 active:translate-y-1 text-2xl border-b-4 border-l-2 border-lime-600 rounded-lg basis-1/2 py-2">Play Again</a>
                </div>
            </section>
        </>
    );
}

export default Results;
