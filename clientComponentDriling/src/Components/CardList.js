import React from 'react'
import { Table, Button } from 'reactstrap'

function CardList(props) {

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category OD</th>
                    <th>Product Name</th>
                    <th> Unit Price</th>
                    <th>Unit In Stock</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody >
                {props.cart.map(cartItem => (
                    <tr key={cartItem.product.productID}>
                        <th>{cartItem.product.productID}</th>
                        <th>{cartItem.product.categoryID}</th>
                        <th>{cartItem.product.name}</th>
                        <th>{cartItem.product.unitPrice}</th>
                        <th>{cartItem.product.unitsInStock}</th>
                        <th>{cartItem.quantity}</th>
                        <Button onClick={()=> {props.removeCart(cartItem.product)}} className="bg-danger far fa-trash-alt  font-weight-bold  ">  Remove</Button>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}


export default CardList
