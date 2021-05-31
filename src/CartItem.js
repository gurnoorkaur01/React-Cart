import React from 'react';

class CartItem extends React.Component {
    
    testing(){
        const promise= new Promise((resolve,reject) => {
            setTimeout(() =>  {
                resolve('done');
            }, 5000);
        })
        promise.then(() => {
            //here iside promise setState will act as synchronous call 
            this.setState( { qty : this.state.qty+10});
            this.setState( { qty : this.state.qty+10});
            this.setState( { qty : this.state.qty+10});
            console.log('state',this.state);
        }); 
    }
    increaseQuantity = () => {
        //this.state.qty += 1;
        //console.log('this.state',this.state);

        //setState form 1
        //this.setState({
          //  qty: this.state.qty + 1
        //}  //, () => {}
        //);
        //this.setState({
        //    title: "some new title"

        //});


        //setState form 2-if prevState required use this form
        this.setState( (prevState) => { 
            return{
                qty : prevState.qty + 1
            }   
        });
        this.setState( (prevState) => { 
            return{
                qty : prevState.qty + 1
            }   
        });
        this.setState( (prevState) => { 
            return{
                qty : prevState.qty + 1
            }   
        }, ()=>{console.log('this.state',this.state);}
        ); 
        console.log(this.state);
    }

    decreaseQuantity =() =>{
        const { qty } = this.state;
        if(qty === 0){
            return;
        } 

        this.setState( (prevState) =>{
            return {
                qty : prevState.qty - 1
            }

      });

    }
    render() {
    console.log('this.props', this.props);
    const {price, title, qty} = this.props.product;
    return (  
        <div className="cart-item">
            {/*this.props.jsx*/}
            <div className="left-block">
            <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price} </div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://img-premium.flaticon.com/png/512/992/992651.png?token=exp=1622030782~hmac=cdaf35bba19837b248113ab78cca349d"
                        onClick={this.increaseQuantity}
                        //onClick={this.increaseQuantity.bind(this)} 
                        

                        />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://img-premium.flaticon.com/png/512/992/992683.png?token=exp=1622030791~hmac=8045f2cc616d478ab0e9254a1d938cb0"
                        onClick={this.decreaseQuantity}
                        />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
                        />
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