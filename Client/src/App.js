import './App.css';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import Navi from './Components/Navi';
import { Container, Row, Col } from 'reactstrap';
import { useState, useEffect } from "react";
import Alertify from "alertifyjs"

function App() {
  //burada kapsülleme kullanıyoruz best prtactise açısından daha avantajlı
  let productInfo = { title: "Product List", price: "158 TL" };
  let categoryInfo = { title: "Category List" };
  const [currentCategory, setCurrentCategory] = useState("")
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const changeCategory = (category) => {
    setCurrentCategory(category.name);
    getProducts(category.id);
    console.log(category)
  }

  useEffect(() => {
    getProducts()

  }, [])

  const getProducts = (categoryID) => {
    let url = "http://localhost:3000/products"

    // eğer parametrede categoryID göderilmişşe diyoruz if ile alıyoruz parametreyi
    if (categoryID) {

      url += "?categoryID=" + categoryID;
    }
    fetch(url)

      .then(response => response.json())

      .then(res => {

        setProducts(res)

      }
      )
  }
console.log("cart ilk hal:", cart)
  const addtoCart = (product) =>{
    console.log("product",product)
    let newCart = cart
    
    console.log("kart eklendi")
    const addedItem = newCart.find(c => c.product.productID === product.productID);
    //(c => c.product.productID === product.productID); burada find methoduyla her bir elemanın productIdlerini kontrol edip varsa quantity +1 yapıyoruz yoksa elemanı basıyoruz array içerisine
    if(addedItem){
      addedItem.quantity += 1;

    }else{
      newCart.push({product:product , quantity:1})

    }

 setCart([...newCart])
   console.log("cart son hal:", cart)
   Alertify.success(product.name  +  " added to cart", 2)
}

 const removeCart = (product) => {


 let newCard=cart.filter(c => c.product.productID !== product.productID)
 setCart(newCard)

 Alertify.error(product.name  +  " deleted   to cart", 2)
}
  return (
    <Container>
      <Navi  cart = {cart} removeCart={removeCart} />
      <Row>
        <Col xs="3">
          <CategoryList currentCategory={currentCategory} changeCategory={changeCategory} info={categoryInfo} />
        </Col>
        <Col xs="9">
          <ProductList addtoCart={addtoCart} products={products} currentCategory={currentCategory} changeCategory={changeCategory} info={productInfo} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
