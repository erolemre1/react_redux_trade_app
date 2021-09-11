import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as productsAction from "../../redux/actions/productActions";
import { Table, Button } from 'reactstrap';
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
function ProductList(props) {
    useEffect(() => {
        props.actions.getProducts();
    }, []);

    const addToCart = (product) => {

        props.actions.addToCart({ quantity: 1, product })
        alertify.success(product.name + " Added To Cart.", 1)
    }
    return (
        <div className="mt-3">
            <span className="bg-warning text-white p-2 border rounded h4 font-weight-bold">Products</span>   - <span className="bg-success text-white p-2 border rounded   h4 font-weight-bold">{props.currentCategory.name}</span>
            <div className="mt-2">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit In Stock </th>
                            <th>Add To Basket</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.products.map(product => (
                                <tr key={product.productID}>
                                    <th scope="row">{product.productID}</th>
                                    <td> <Link to={"/saveProduct/"+product.productID}> {product.name}  </Link> </td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td><Button color="success" onClick={() => addToCart(product)}>Added To Cart</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productsAction.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
//yukarıda mapStateToProps hangi componentte kullanıcaksak bu functionu yazmamıza gerekli ve sonra export ve connect yapıyoruz
