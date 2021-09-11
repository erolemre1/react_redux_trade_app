import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Table, Button } from "reactstrap"
import * as cartActions from "../../redux/actions/cartActions";
import alertify  from 'alertifyjs';

function CartDetail(props) {
    const removeFromCart = (product) => {
        props.actions.removeFromCart(product)
        alertify.error(product.name + " items deleted.",1)
    }
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Unit In Stock </th>
                        <th>Delete To Basket</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map(cartItem => (
                            <tr key={cartItem.product.productID}>
                                <th scope="row">{cartItem.productID}</th>
                                <td>{cartItem.product.name}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td><Button color="danger" onClick={() => removeFromCart(cartItem.product)}>Delete Product</Button></td>

                            </tr>
                        ))
                    }

                </tbody>
                
            </Table>
            {props.cart.length <1 ? <h1 className="text-center text-danger mt-5">Basket is Empty!!
        </h1> : null

                }
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    //bir aksiyounu kullanabilmek için mapDispatchToProps kullanıyoruz
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)

        }
    }
}

function mapStateToProps(state) {
    //state bağlanabilmek için  mapStateToProps kullanıyoruz 
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)

