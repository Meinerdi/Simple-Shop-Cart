import React from 'react'
import s from './Cart.module.css'
import fire from '../../firebase'
import emptyCartImage from '../../assets/images/empty-cart.png'

export const Cart = (props) => {

    const {
        increaseProductCount,
        decreaseProductCount,
        deleteFromCart,
        clearCart,
        inCart,
        totalPrice
    } = props

    let onIncreaseButton = product => {
        increaseProductCount(product)
    }

    let onDecreaseButton = product => {
        decreaseProductCount(product)
    }

    let onDeleteButton = product => {
        deleteFromCart(product)
    }

    let onClearButton = () => {
        clearCart()
    }

    let onCheckoutButton = () => {
        alert(JSON.stringify(inCart))
    }


    let handleSubmit = () => {
        fire.database().ref('products').once('value').then(snap => console.log(snap.val()))
        // console.log(firebase)
    }

    return (
        <div className={s.cart}>
            {!inCart.length ? <img src={emptyCartImage} alt="empty-cart" className={s.emptyCart} /> : inCart.map(item => (
                <div key={item.id} className={s.productItem}>
                    <img src={item.image} alt="item" className={s.itemImage} />
                    <div className={s.infoHolder}>
                        <span>{item.name}</span>
                        <span>{item.price}$</span>
                        <div className={s.buttonHolder}>
                            <button disabled={
                                inCart.find(product => product.id === item.id).count === 1 ? true : false
                            } onClick={() => onDecreaseButton(item)}>-</button>
                            {item.count}
                            <button onClick={() => onIncreaseButton(item)}>+</button>
                            <button onClick={() => onDeleteButton(item)}>Delete</button>
                        </div>

                    </div>
                </div>
            )
            )}

            {!inCart.length ? null : <button onClick={onClearButton}>Clear Cart</button>}
            {!inCart.length ? null : <div>Total price: {totalPrice} $</div>}
            {!inCart.length ? null : <button onClick={onCheckoutButton}>Checkout</button>}

            <button onClick={handleSubmit}>send</button>

        </div>
    )
}