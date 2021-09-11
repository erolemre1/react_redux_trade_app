import React from 'react'
import { Table,Button } from 'reactstrap';
function ProductList(props) {

    return (
        <div>
            <h3>{props.info.title} - {props.currentCategory}</h3>
            {/* <h3>{props.info.pirice}</h3> */}
            <Table>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => (
                        <tr key={product.productID} className="mt-2 border-top " >
                            <th scope="row">{product.productID}</th>
                            <td>{product.name}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td><Button onClick={()=> props.addtoCart(product)} color="info"> Add to basket</Button></td>
                         </tr>
                    ))} 
                 </tbody>
            </Table>
        </div>
    )
}

export default ProductList;
