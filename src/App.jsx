import { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useRoutes,
} from "react-router-dom";
import HomePage from "./template/HomePage";
import ShoePage from "./components/CartShoe/ShoePage";
import TrangChu from "./TrangChu";
import "flowbite/dist/flowbite.min.css";
import PageNotFound from "./components/PageNotFound";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* Home Template start */}
                    <Route path="/" element={<HomePage></HomePage>}>
                        {/* thuộc tính index xác định 1 component con sẽ hiển thị cùng lúc khi người dùng
                truy cập tới đường dẫn của component cha */}
                        <Route index element={<TrangChu />} />
                        <Route
                            path="/shoe_store"
                            element={<ShoePage />}
                        ></Route>
                    </Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
