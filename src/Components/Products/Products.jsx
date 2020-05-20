import React from 'react'
import s from './Products.module.css'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Products = (props) => {
    const { addToCart, products } = props

    let onProductBuy = (product) => {
        addToCart(product)
    }

    return (
        <ul className={s.productList}>
            {products.map(item => (
                <li key={item.id} className={s.productItem}>
                    <img src={item.image} alt="product" className={s.itemImage} />
                    <span>{item.name}</span>
                    <span>{item.price} $ </span>
                    <div className={s.addButtonHolder}>
                        <button id={item.id} onClick={() => {
                            onProductBuy(item)
                            toast('Added to cart', {
                                className: "toast",
                                position: "bottom-right",
                                autoClose: 600,
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
                            limit={2}
                        />
                    </div>
                </li>
            )
            )}
        </ul>
    )
}