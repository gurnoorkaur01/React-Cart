import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    //const arr=[1,2,3,4,5];
    //const {products} = this.state;
    
    
    //we are gettung props(const cart=props vale props) from react
    //and these props have these products(const products= props)
    //and these func as well incq, decq, delpr
    //and we are looping over th eproduct set using products.map
    const {products} =props; 
    return ( 
        <div className="cart">
        {products.map((product) => {
            return (
               <CartItem 
               product={product} 
               key={product.id} 
               //func={()=>console.log('sdsd')}
               //isLoggedin={False}
               //jsx={<h1>Test</h1>}
               onIncreaseQuantity = {props.onIncreaseQuantity}
               onDecreaseQuantity = {props.onDecreaseQuantity}
               onDeleteProduct = {props.onDeleteProduct}
               />
               )
            })}
        </div> 
    );
}

export default Cart;