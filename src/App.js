import React from 'react'; 
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor()
  {
    super(); 
    this.state={
        products:[
        {
            price:99,
            title:'Watch',
            qty:1,
            img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
            id: 1
        },
        {
            price:999,
            title:'Mobile Phone',
            qty:10,
            img:'https://images.unsplash.com/photo-1565277441243-2be39689f95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80',
            id: 2
        },
        {
            price:999,
            title:'Laptop',
            qty:4,
            img:'https://images.unsplash.com/photo-1562184552-d33c64b991ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id:3
         }
        ]
      }
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
      const {products} = this.state;

      const items = products.filter((item) => item.id!== id); 
      //it returns an array that contains products whose id is not equal
      // to the id that is passed
      this.setState({
          products:items
      })
  }
  getCartCount = () => {
    const { products} =this.state;
    let count = 0;
    products.forEach((product) =>{
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal=0;
    products.map((product) => {
      cartTotal += cartTotal +product.qty * product.price;
    })
    return cartTotal;
  }
  render (){
    const { products  } = this.state;
    return (
    <div className="App"> 
      <Navbar
      count={this.getCartCount()}
      />
      <Cart 
    products={products}
    onIncreaseQuantity = {this.handleIncreaseQuantity}
    onDecreaseQuantity = {this.handleDecreaseQuantity}
    onDeleteProduct = {this.handleDeleteProduct}
    />
    <div style= { {fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()}</div>
    </div>
    );
  } 
}

export default App;
