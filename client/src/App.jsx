import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import { DataProvider } from "./context/dataContext";

const router = [
    {
        path: "/",
        element: <Homepage/>
    },
    {
        path: "/questions",
        element: <Questions/>
    },
    {
        path: "/results",
        element: <Results/>
    },
   ]

function App() {
    return (
        <>
        <DataProvider>
        <div className="flex justify-center text-2xl font-nanum text-white min-h-screen  bg-teal-500 text-center ">
            <Routes>
                {router.map((item) => (
                        <Route path={item.path} element={item.element} key={item.path}/>
                ))}
            </Routes>
            </div>
            </DataProvider>
        </>
    );

}

export default App;
