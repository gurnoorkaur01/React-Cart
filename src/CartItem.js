import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super(); 
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
    }
    render() {
    const {price,title,qty}=this.state;
    return ( 
        <div className="cart-item">
            <div className="left-block">
            <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{this.state.title}</div>
                <div style={{color:'#777'}}>Rs {price} </div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://img-premium.flaticon.com/png/512/992/992651.png?token=exp=1621449837~hmac=fdddedfe296717a31e1087d5194c501c"/>
                    <img alt="decrease" className="action-icons" src="https://img-premium.flaticon.com/png/512/992/992683.png?token=exp=1621449796~hmac=5737224e1099947dde270851abf07ac2"/>
                    <img alt="delete" className="action-icons" src="https://img-premium.flaticon.com/png/512/1214/1214428.png?token=exp=1621449875~hmac=ccc468cc4a55b85c4c52e24646f44642 "/> 
                </div>

            </div>
        </div>
         );

    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;