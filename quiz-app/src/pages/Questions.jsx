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
        <section className=" md:w-1/2 w-full gb-lime-200 min-h-screen">
            <header className="flex justify-between p-4 mb-8">
                <a href="/" className="bg-gray-400 rounded-full w-8 h-8 flex justify-center items-center">
                    <MdOutlineArrowBackIosNew />
                </a>
                <button>Skip</button>
            </header>
            <main className="flex flex-col items-center justify-center gap-4">
                <div className="relative bg-lime-400 rounded-lg h-64 w-80 flex flex-col items-center gap-6 p-4 pt-12 mb-4">
                    <div className="absolute bottom-56 right-0 left-0 m-auto bg-gray-400 rounded-xl w-36 px-10 py-2 flex flex-col items-center">
                        <h3>Question</h3>
                        <h3>7/10</h3>
                    </div>
                    <div className="timer-wrapper">
                    <CountdownCircleTimer isPlaying size={60} strokeWidth={4} duration={30} colors={["#004777", "#F7B801", "#A30000", "#A30000"]} colorsTime={[20, 10, 5, 0]} onComplete={() => ({ shouldRepeat: false })}>
                        {renderTime}
                    </CountdownCircleTimer>
                    </div>
                    <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
                </div>

                <button className=" bg-lime-400 rounded-lg w-80 py-3 border-b-4 border-l-2">Answer 1</button>
                <button className=" bg-lime-400 rounded-lg w-80 py-3 border-b-4 border-l-2">Answer 2</button>
                <button className=" bg-lime-400 rounded-lg w-80 py-3 border-b-4 border-l-2">Answer 3</button>
                <button className=" bg-lime-400 rounded-lg w-80 py-3 border-b-4 border-l-2">Answer 4</button>

                <a href="/results" className="bg-gray-400 rounded-lg w-80 py-3 mt-6 border-b-4 border-l-2">Submit</a>
            </main>
        </section>
    );
}

export default Questions;
