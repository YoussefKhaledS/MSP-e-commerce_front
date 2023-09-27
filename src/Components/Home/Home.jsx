import React, { Fragment, useRef, useState } from 'react'
import style from "./Home.module.css"
import logo from "../images/MSPLogo.svg";
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import image1 from "../images/gloves.jpg";
import image2 from "../images/camera.jpg";
import image3 from "../images/t-shirts.jpg";
import image4 from "../images/pants.jpg";
import image5 from "../images/dress.jpg";
import image6 from "../images/shoes.jpg";
import image7 from "../images/bag.jpg";
import image8 from "../images/hat.jpg";
import image9 from "../images/sunglasses.jpg";
import image10 from "../images/lamp.jpg";
import image11 from "../images/towel.jpg";
import image12 from "../images/chairs.jpg";
import image13 from "../images/cushion.jpg";
import image14 from "../images/coffeeCups.jpg";
import image15 from "../images/curtain.jpg";

const data = [
    { image: image1, name: "Gloves", oldPrice: 50, offer: 10 },
    { image: image2, name: "Camera", oldPrice: 650, offer: 40 },
    { image: image3, name: "T-Shirts", oldPrice: 1000, offer: 30 },
    { image: image4, name: "Pants", oldPrice: 850, offer: 18 },
    { image: image5, name: "Dress", oldPrice: 680, offer: 44 },
    { image: image6, name: "Shoes", oldPrice: 600, offer: 13 },
    { image: image7, name: "Bag", oldPrice: 300, offer: 5 },
    { image: image8, name: "Hat", oldPrice: 70, offer: 8 },
    { image: image9, name: "Sunglasses", oldPrice: 920, offer: 14 },
    { image: image10, name: "Lamp", oldPrice: 850, offer: 46 },
    { image: image11, name: "Towel", oldPrice: 400, offer: 30 },
    { image: image12, name: "Chairs", oldPrice: 1000, offer: 33 },
    { image: image13, name: "Cushion", oldPrice: 550, offer: 26 },
    { image: image14, name: "CoffeeCups", oldPrice: 140, offer: 28 },
    { image: image15, name: "Curtain", oldPrice: 390, offer: 42 },
];

function Home() {
    
    const[products , setproducts] = useState(data) ;
    const[cart , setcart] = useState([]) ;
    const coast = useRef(0);

    function addToCart(e, image, name, offer, oldPrice , idx){
        setcart([...cart, {image , name , offer , oldPrice}]) ;
        const list = products.filter((el , i) => {
            if(i !==idx)return el ;
        } )
        setproducts(list) ;
        coast.current+=parseFloat(((oldPrice* (offer/100)).toFixed(2))) ;

    }

    function removeFromCart(e, image, name, offer, oldPrice , idx){
        const list = cart.filter((el, i) => {
            if (i !== idx) return el;
        })
        setcart(list);
        setproducts([...products , {image , name, offer , oldPrice}]) ;
        coast.current -= parseFloat(((oldPrice * (offer / 100)).toFixed(2)))
    }
    return (
        <Fragment>
            
            <header>

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1>MSP E-commerce</h1>
            </header>
            <div className={style.main}>
                <div className={style.section1}>
                    <div>
                        <span>{products.length}</span>{/* dynamic avalable products */}
                        <h2>TOP HOME PICKS</h2>
                    </div>
                    <div className={style.products}>
                        <Products products={products} addToCart={addToCart}/>
                    </div>
                </div>
                <div className={style.section2}>
                    <div>
                        <Cart cart = {cart} removeFromCart={removeFromCart}/>
                    </div>
                    <div>
                        <h2>TOTAL PRICE:</h2>
                        <span>{coast.current.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;