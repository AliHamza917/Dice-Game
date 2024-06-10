
import Layout from "./global/layouts/Layout";
import StartPage from "./pages/StartPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<StartPage/>} />
                    <Route path="game-page" element={<GamePage/>} />
                </Routes>
            </Layout>

        </BrowserRouter>


    </div>
  );
}

export default App;
