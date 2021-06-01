import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor(){
        super(); 
        this.state={
            products:[
            {
                price:99,
                title:'Watch',
                qty:1,
                img:'',
                id: 1
            },
            {
                price:999,
                title:'Mobile Phone',
                qty:10,
                img:'',
                id: 2
            },
            {
                price:999,
                title:'Laptop',
                qty:4,
                img:'',
                id:3
             }
            ]
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
        //this.testing();
    }
    handleIncreaseQuantity = (product) => {
        console.log("Hey please inc qty of ", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            //products: products
            products
        })
    }
    handleDecreaseQuantity = (product) => {
        console.log("Hey please dec qty of ", product);
        const {products} = this.state;
        const index = products.indexOf(product);

        //check if qty is zero or not
        //if zero just return dnt pass anything
        if(products[index].qty == 0){
            return;
        }

        products[index].qty -= 1;
        this.setState({
            //products: products
            products
        })
        
    }
    handleDeleteProduct =(id) => {
        const {products} =this.state;

        const items = products.filter((item) => item.id!== id); 
        //it returns an array that contains products whose id is not equal
        // to the id that is passed
        this.setState({
            products:items
        })
    }
    render() {
        //const arr=[1,2,3,4,5];
        const {products} = this.state;       
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
               onIncreaseQuantity = {this.handleIncreaseQuantity}
               onDecreaseQuantity = {this.handleDecreaseQuantity}
               onDeleteProduct = {this.handleDeleteProduct}
               />
               )
                
            })}
            </div> 
        );
    }
}

export default Cart;