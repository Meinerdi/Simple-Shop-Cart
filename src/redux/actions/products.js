import fire from '../../firebase'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

export const setProducts = (products) => ({
    type: SET_PRODUCTS, products
})

export const toggleFetching = (boolean) => ({
    type: TOGGLE_FETCHING, boolean
})

export const getProducts = () => dispatch => {
    fire.database().ref('products').once('value')
        .then(snap => {
            dispatch(setProducts(snap.val()))
            dispatch(toggleFetching(false))
        })
}
