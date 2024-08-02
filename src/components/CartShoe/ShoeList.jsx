import React, { useState } from "react";
import ShoeItem from "./ShoeItem";
import ShoeModel from "./ShoeModel";
import { Modal } from "flowbite-react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoeList = ({ arrShoes, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cart, setcart] = useState([]);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const notify = () =>
        toast("🥳 Bạn đã thêm vào giỏ thành công!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

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

    //function xóa sp
    const removeItem = (id) => {
        let arrCarts = [...cart];
        let index = arrCarts.findIndex((sp) => sp.id == id);
        if (index != -1) {
            arrCarts.splice(index, 1);
            setcart(arrCarts);
        } else {
            alert("Không tìm thấy sản phẩm");
        }
    };

    //xử lí tăng giảm quanity
    const TangGiamQuantity = (id, option) => {
        let arrCarts = [...cart];
        let index = arrCarts.findIndex((sp) => sp.id === id);
        //xử lí tăng nếu option == true
        if (option) {
            arrCarts[index].quantity += 1;
            setcart(arrCarts);
        }
        //xử lí giảm nếu option == false
        else {
            if (arrCarts[index].quantity > 1) {
                arrCarts[index].quantity -= 1;
                setcart(arrCarts);
            }
        }
    };
    // const removeItem = (idRemove) => {
    //     let arrCarts = [...cart];
    //     const cartUpdate = arrCarts.filter((sp) => sp.id != idRemove);
    //     setcart(cartUpdate);
    // };
    return (
        <>
            <ToastContainer />
            <div>
                <h1 className="text-center text-4xl text-sky-500 py-8 font-bold">
                    {title}
                </h1>
                <div className="text-end py-4  text-2xl font-semibold text-purple-700  ">
                    <button
                        onClick={openModal}
                        type="button"
                        className="relative"
                    >
                        Giỏ hàng
                        <span className=" absolute top--1 right--1.5  bg-red-500 position text-yellow-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-700 dark:text-yellow-300">
                            {tongSoLuong}
                        </span>
                    </button>
                </div>
                <ShoeModel
                    handleTangGiam={TangGiamQuantity}
                    onClose={closeModal}
                    isOpen={isModalOpen}
                    removeItem={removeItem}
                    cart={cart}
                />
                <div className="grid grid-cols-3 gap-5 mb-2">
                    {arrShoes.map((item, index) => {
                        return (
                            <ShoeItem
                                hamThongBao={notify}
                                shoeItem={item}
                                key={index}
                                addToCart={addToCart}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ShoeList;
