import React from 'react'
import s from './Products.module.css'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../Loader/Loader';

export const Products = (props) => {
    const { addToCart, products, isFetching } = props

    let onProductBuy = (product) => {
        addToCart(product)
    }

    return (
        <>
            {isFetching ?

                <Loader className={s.loader} /> :

                <ul className={s.productList}>
                    {products.map(item => (
                        <li key={item.id} className={s.productItem}>
                            <img src={item.image} alt="product" className={s.itemImage} />
                            <span className={s.itemName}>{item.name}</span>
                            <span>{item.price} $ </span>
                            <div className={s.addButtonHolder}>
                                <button className={s.buyButton} onClick={() => {
                                    onProductBuy(item)
                                    toast(`${item.name} was added`, {
                                        className: "toast",
                                        position: "bottom-right",
                                        autoClose: 500,
                                        hideProgressBar: true,
                                        closeOnClick: false,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: 0,
                                        transition: Flip,

                                    });
                                }}>Add to cart</button>
                                <ToastContainer
                                    position="top-right"
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover={false}
                                    limit={1}
                                />
                            </div>
                        </li>
                    )
                    )}
                </ul>
            }


        </>
    )
}