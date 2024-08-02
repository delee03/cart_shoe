import React from "react";

const ShoeModel = ({ isOpen, onClose, cart, removeItem, handleTangGiam }) => {
    if (!isOpen) return null;
    return (
        <div
            id="default-modal"
            tabIndex={-1}
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div
                style={{ maxWidth: "55rem" }}
                className="relative p-4 w-full  max-h-full"
            >
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Giỏ hàng
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={onClose}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                        \
                        <table className="w-full">
                            <thead className="text-white mb-4">
                                <tr>
                                    <th>Mã SP</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên Sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Tổng tiền</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody className="text-white ">
                                {cart.map((item, index) => {
                                    return (
                                        <tr
                                            className="text-center mt-4"
                                            key={index}
                                        >
                                            <td>{item.id}</td>
                                            <td>
                                                <img
                                                    src={item.image}
                                                    alt="..."
                                                    className="w-full  h-12 object-cover rounded-full"
                                                />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button
                                                    className="bg-sky-400 text-md font-medium me-2 px-2.5 py-1.5 rounded"
                                                    onClick={() => {
                                                        handleTangGiam(
                                                            item.id,
                                                            true
                                                        );
                                                    }}
                                                >
                                                    +
                                                </button>
                                                {item.quantity}
                                                <button
                                                    className="bg-sky-400 text-md font-medium ms-2 px-2.5 py-1.5 rounded"
                                                    onClick={() => {
                                                        handleTangGiam(
                                                            item.id,
                                                            false
                                                        );
                                                    }}
                                                >
                                                    -
                                                </button>
                                            </td>
                                            <td>{item.price}</td>
                                            <td>
                                                {item.price * item.quantity}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        removeItem(item.id);
                                                    }}
                                                    className="bg-red-500 text-xs font-medium me-2 px-2.5 py-1.5 rounded  text-white"
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <td
                                    className="text-white pt-5 text-lg text-end font-semibold"
                                    colSpan={7}
                                >
                                    Tổng tiền:{" "}
                                    {cart.reduce((tongTien, item, index) => {
                                        return (tongTien +=
                                            item.price * item.quantity);
                                    }, 0)}
                                </td>
                            </tfoot>
                        </table>
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Thanh toán
                        </button>
                        <button
                            onClick={onClose}
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoeModel;
