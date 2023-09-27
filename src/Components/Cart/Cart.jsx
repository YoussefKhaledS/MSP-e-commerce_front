import React, { Fragment } from 'react'
import style from "./Cart.module.css"
import img from "../images/gloves.jpg"
function Cart({ cart , removeFromCart}) {
    return (
        <Fragment>

            <div className={style.main}>
                <span>{cart.length}</span>
                {
                    cart.map(({ image, name, offer, oldPrice }, idx) => (
                        <Fragment>
                            <div>
                                <div className={style.image} style={{ backgroundImage: `url(${image})` }}></div>
                                <div className={style.details}>
                                    <h3>{name}</h3>
                                    <div>
                                        <div>
                                            <div className="price">{(oldPrice*(offer/100)).toFixed(2)}</div>
                                            <div className='offDetalis'>
                                                <div className="oldprice">{oldPrice}</div>
                                                <div className="offer">{offer}% off</div>
                                            </div>
                                        </div>
                                        <button onClick={(e) => removeFromCart(e, image, name, offer, oldPrice , idx)}>Remove</button>
                                    </div>
                                </div>
                            </div>

                            <div className={style.line}></div>
                        </Fragment>
                    ))
                }

            </div>
        </Fragment>
    )
}

export default Cart