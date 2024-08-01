import React, { useState } from "react";
import ShoeItem from "./ShoeItem";
import ShoeModel from "./ShoeModel";
import { Modal } from "flowbite-react";

const ShoeList = ({ arrShoes, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shoeSelected, setshoeSelected] = useState(arrShoes[0]);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addToCart = (shoeItem) => {
        console.log(shoeItem);
    };

    // const tongSoLuong = shoeSelected.reduce((tsl, item, index) => {
    //     return tsl + 1;
    // }, 0);
    return (
        <div>
            <h1 className="text-center text-4xl text-sky-500 py-8 font-bold">
                {title}
            </h1>
            <div className="text-end py-4  text-2xl font-semibold text-purple-700  ">
                <button onClick={openModal} type="button" className="relative">
                    Giỏ hàng
                    <span className=" absolute top--1 right--1.5  bg-purple-100 position text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                        1
                    </span>
                </button>
            </div>
            <ShoeModel
                onClose={closeModal}
                isOpen={isModalOpen}
                shoeSelected={arrShoes[0]}
            />
            <div className="grid grid-cols-3 gap-5 mb-2">
                {arrShoes.map((item, index) => {
                    return (
                        <ShoeItem
                            shoeItem={item}
                            key={index}
                            addToCart={addToCart}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ShoeList;
