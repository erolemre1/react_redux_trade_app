import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom"
import CartDetail from "../cart/CartDetail";
import Form1 from '../forms/Form';
import Form2 from '../forms/Form2';
import AddorUpdateProduct from "../products/AddorUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" exact component={Dashboard} />
        <Route path="/cart" exact component={CartDetail} />
        <Route path="/Form" component={Form1} />
        <Route path="/Form2" component={Form2} />
        <Route path="/saveProduct/:productID" component={AddorUpdateProduct} />
        <Route path="/saveProduct" component={AddorUpdateProduct} />
        <Route exact component={NotFound} />



      </Switch>
    </Container>
  );
}

export default App;
