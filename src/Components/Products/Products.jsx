import React, { Fragment } from 'react'
import style from "./Products.module.css"
import img from "../images/chairs.jpg";

function Products({products , addToCart}) {
    
    return (
        <Fragment>
            
            <div className={style.main}>
                {
                    products.map(({image , name , offer , oldPrice}, idx) => (
                        
                        <div key={idx}>
                            <div className={style.image} style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={style.detalis}>
                                <h3>{name}</h3>
                                <div className="price">{(oldPrice*(offer/100)).toFixed(2)}</div>
                                <div className='offDetalis'>
                                    <div className="oldprice">{oldPrice}</div>
                                    <div className="offer">{offer}% off</div>
                                </div>
                                <button onClick={(e) => addToCart(e, image, name, offer, oldPrice,idx)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </Fragment>
    )
}

export default Products