import { SET_PRODUCTS } from "../actions/products"

let initialState = {
    products: [
        { id: 1, name: 'Siemens S65', price: 370, image: "https://sidex.ru/images_offers/634/634918/siemens_s65_2.jpg" },
        { id: 2, name: 'Nokia N91', price: 1000, image: "https://icons.iconarchive.com/icons/mastermattie/nokia-n/256/N91-icon.png" },
        { id: 3, name: 'Nokia N82', price: 480, image: "https://wp-seven.ru/wp-content/uploads/2013/07/Nokia-N82.png" },
        { id: 4, name: 'Nokia N97', price: 610, image: "https://i1.foxtrot.com.ua/product/MediumImages/5717847_0.jpg" },
        { id: 5, name: 'LG Optimus G', price: 200, image: "https://otziv-otziv.ru/assets/cache/images/product/7/64/otzyvy-lg-optimus-g-600x600-87f.jpg" },
        { id: 6, name: 'Xiaomi Mi 5', price: 330, image: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/13/goods_img_big-v1/20181113170433_91075.jpg" },
    ]
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
            return state
    }
}