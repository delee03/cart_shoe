import React, { useState } from "react";
import ShoeItem from "./ShoeItem";
import ShoeModel from "./ShoeModel";
import { Modal } from "flowbite-react";

const ShoeList = ({ arrShoes, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cart, setcart] = useState([]);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addToCart = (shoeItem) => {
        let spGioHang = {
            id: shoeItem.id,
            name: shoeItem.name,
            price: shoeItem.price,
            image: shoeItem.image,
            quantity: 1,
        };
        let arrCarts = [...cart];
        let index = arrCarts.findIndex((sp) => sp.id === spGioHang.id);
        if (index !== -1) {
            //trường hợp có sp trong cart
            arrCarts[index].quantity += 1;
        } else {
            //chưa có sp trong cart
            arrCarts.push(spGioHang);
        }
        //gán cập nhật lại giỏ hàng
        setcart(arrCarts);
    };

    let tongSoLuong = cart.reduce((accu, item, index) => {
        return accu + item.quantity;
    }, 0);
    return (
        <div>
            <h1 className="text-center text-4xl text-sky-500 py-8 font-bold">
                {title}
            </h1>
            <div className="text-end py-4  text-2xl font-semibold text-purple-700  ">
                <button onClick={openModal} type="button" className="relative">
                    Giỏ hàng
                    <span className=" absolute top--1 right--1.5  bg-red-500 position text-yellow-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-700 dark:text-yellow-300">
                        {tongSoLuong}
                    </span>
                </button>
            </div>
            <ShoeModel onClose={closeModal} isOpen={isModalOpen} cart={cart} />
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
