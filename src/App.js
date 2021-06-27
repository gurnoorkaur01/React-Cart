import React from 'react'; 
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class App extends React.Component {
  constructor()
  {
    super(); 
    this.state={
        // products:[
        // {
        //     price:25000,
        //     title:'Watch',
        //     qty:1,
        //     img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        //     id: 1
        // },
        // {
        //     price:15000,
        //     title:'Mobile Phone',
        //     qty:1,
        //     img:'https://images.unsplash.com/photo-1565277441243-2be39689f95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80',
        //     id: 2
        // },
        // {
        //     price:50000,
        //     title:'Laptop',
        //     qty:1,
        //     img:'https://images.unsplash.com/photo-1562184552-d33c64b991ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        //     id:3
        //  } 
        // ],
        products: [],
        loading : true
      };
      this.db = firebase.firestore();
    }

    // componentDidMount() {
    //   // firebase
    //   //   .firestore()
    //   //   .collection('Products')
    //   //   .get()
    //   //   .then((snapshot) => {
    //   //       console.log(snapshot);
    //   //       snapshot.docs.map((doc) => {
    //   //         console.log(doc.data);
    //   //       });

    //   //       const products =snapshot.docs.map((doc) => {
    //   //         const data =doc.data();
    //   //         data['id'] = doc.id;
    //   //         return data;
    //   //       })

    //   //       this.setState({
    //   //         products,
    //   //         loading:false
    //   //       })
    //   //   })

    //   this.db
    //     .collection('Products')
    //     .onSnapshot(snapshot => {
    //       console.log(snapshot);

    //       // snapshot.docs.map((doc) => {
    //       //   console.log(doc.data);
    //       // });

    //       const products =snapshot.docs.map(doc => {
    //         const data =doc.data();
    //         data["id"] = doc.id;
    //         return data;
    //       });

    //       this.setState({ products: products, loading: false});
    //   });
    // }

    componentDidMount(){
      this.db 
        .collection("Products")
        // .where('price','==',25000)
        // .where('price','<',25000)
        // .where('title', '==', 'Watch')
        // .orderBy('price')
        // .orderBy('price', 'desc')
        .onSnapshot(snapshot => {
          const products = snapshot.docs.map(doc => {
            const data =doc.data();
            data["id"] = doc.id;
            return data;

          });
          this.setState({ products: products, loading: false});
        });
    }

    handleIncreaseQuantity = product => {
      console.log("Hey please inc qty of ", product);
      const { products } = this.state;
      const index = products.indexOf(product);

      // products[index].qty +=1;
      // this.setState({
      //     //products: products
      //     products
      // });

      const docRef = this.db.collection("Products").doc(products[index].id);
      //using this we will get refernce of that particular product using that id
      //now we can update data using docref and will return a promise
      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then(() => {
          console.log('updated successfully')
        })
        .catch(error => {
          console.log(error);
        });
  };

  handleDecreaseQuantity = product => {
      console.log("Hey please dec qty of ", product);
      const {products} = this.state;
      const index = products.indexOf(product);

      //check if qty is zero or not
      //if zero just return dnt pass anything
      if(products[index].qty === 0){
          return;
      } 
      // products[index].qty -= 1;
      // this.setState({
      //     //products: products
      //     products
      // });

      const docRef = this.db.collection('Products').doc(products[index].id);
    
      docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(() => {
          console.log('updated successfully')
        })
        .catch((error) => {
          console.log(error);
        }); 
  };

  handleDeleteProduct = id => {
      const {products} = this.state;

      // const items = products.filter((item) => item.id!== id); 
      // //it returns an array that contains products whose id is not equal
      // // to the id that is passed
      // this.setState({
      //     products:items
      // });
      const docRef = this.db.collection('Products').doc(id);
      docRef
        .delete()
        .then(() => {
          console.log('deleted successfully')
        })
        .catch(err => {
          console.log(err);
        });
  };


  getCartCount = () => {
    const { products} =this.state;
    let count = 0;
    products.forEach((product) =>{
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal=0;

    products.map(product => {
      if(product.qty>0) {

        cartTotal = cartTotal + product.qty * product.price;
      }
     return '';  
    });
    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection('Products')
      .add({
        img:"https://static.toiimg.com/photo/msid-78804776/78804776.jpg",
        price: 900,
        qty:3,
        title:'washing machine',
        
       

      })
      .then(docRef => {
        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  render (){
    const { products, loading  } = this.state;
    return (
    <div className="App"> 
      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{padding : 20, fontSize:20}}>
        Add a product</button> */}
      <Cart
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        products={products}
      />
    {loading && <h1>Loading Products...</h1>}
    <div style= { {fontSize: 20, padding: 10}}>
      TOTAL: {this.getCartTotal()}</div>
    </div>
    );
  } 
}

export default App;
