import React from "react";
import Lottie from "lottie-react";
import pageNotFound from "../assets/animation/pagenotfound.json";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <Lottie
                loop={true}
                animationData={pageNotFound}
                style={{ width: "800px", height: "500px" }}
            />
            <div className="text-center">
                <h2 className="text-2xl text-red-600">
                    Trang web bạn đang tìm kiếm không có!
                </h2>
                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    className="py-2 px-5 bg-red-500 text-xl rounded-lg mt-4"
                >
                    Về trang chủ
                </button>
                {/* <Link to={"/"} className="py-2 px-5 bg-red-500 text-xl">
           Về trang chủ
           Sử dụng to để ck trang tránh dùng thẻ a
        </Link> */}
            </div>
        </div>
    );
};

export default PageNotFound;
