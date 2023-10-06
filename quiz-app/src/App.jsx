import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const router = [
    {
        path: "/",
        element: <Homepage/>
    }
   ]

function App() {
    return (
        <>
            <Routes>
                {router.map((item) => (
                        <Route path={item.path} element={item.element} key={item.path} />
                ))}
            </Routes>
        </>
    );

}

export default App;
