import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const renderTime = ({ remainingTime }) => {
    return (
        <div className="timer">
            <div className="value text-2xl">{remainingTime}</div>
        </div>
    );
};

function Questions() {

    return (
        <section className=" md:w-1/2 w-full  text-xl">
            <header className="flex justify-between p-4 mb-8">
                <a href="/" className="bg-teal-600 rounded-full w-8 h-8 flex justify-center items-center">
                    <MdOutlineArrowBackIosNew />
                </a>
                <button>Skip</button>
            </header>
            <main className="flex flex-col items-center justify-center gap-4">
                <div className="relative bg-teal-400 rounded-lg h-64 w-80 flex flex-col items-center gap-6 p-4 pt-12 mb-4">
                    <div className="absolute bottom-56 right-0 left-0 m-auto bg-teal-600 rounded-xl w-36 px-10 py-2 flex flex-col items-center">
                        <h3>Question</h3>
                        <h3>7/10</h3>
                    </div>
                    <div className="timer-wrapper">
                        <CountdownCircleTimer isPlaying size={60} strokeWidth={4} duration={30} colors={"#a3e635"} onComplete={() => ({ shouldRepeat: false })}>
                            {renderTime}
                        </CountdownCircleTimer>
                    </div>
                    <p className="text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
                </div>

                <button className=" bg-teal-400 rounded-lg w-80 py-3 border-b-4 border-l-2 border-teal-600">Answer 1</button>
                <button className=" bg-lime-400 rounded-lg w-80 py-3 border-b-4 border-l-2 border-teal-600">Answer 2</button>
                <button className=" bg-teal-400 rounded-lg w-80 py-3 border-b-4 border-l-2 border-teal-600">Answer 3</button>
                <button className=" bg-teal-400 rounded-lg w-80 py-3 border-b-4 border-l-2 border-teal-600">Answer 4</button>

                <a href="/results" className="active:translate-y-1 text-2xl bg-teal-600 rounded-lg w-80 py-3 my-6 border-b-4 border-l-2 border-teal-700">
                    Submit
                </a>
            </main>
        </section>
    );
}

export default Questions;
