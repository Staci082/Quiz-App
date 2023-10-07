import { GoDotFill } from "react-icons/go";

function Results() {
    return (
        <>
            <section className=" py-8 flex flex-col items-center pb-6 gap-6">
                <div className="flex flex-col items-center gap-6">
                <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/christmas-star.png" alt="christmas-star"/>
                    <b className="text-2xl">You win!</b>
                </div>

                <div className="relative bg-teal-400 rounded-lg h-64 w-80 flex flex-col items-center justify-end">
                    <div className="absolute top-5 left-5">
                    <p>Quiz type</p>
                    <b>Science</b>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center">
                        <GoDotFill/>
                        <p>Correct 80%</p>
                        </div>
                        <div className="flex items-center">
                        <GoDotFill className="text-sky-800"/>
                        <p>Incorrect 20%</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-4 w-80">
                    <a href="/" className="bg-lime-400 active:translate-y-1 border-b-4 border-l-2 border-lime-600 rounded-lg basis-1/2 py-2 text-lg">Home</a>
                    <a href="/questions" className="bg-teal-400 active:translate-y-1 border-b-4 border-l-2 border-teal-600 rounded-lg basis-1/2 py-2 text-lg">Play Again</a>
                </div>
            </section>
        </>
    );
}

export default Results;
