import React from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink

} from 'reactstrap';

function CardSummary(props) {
    const renderSummary = () => {
        {/*burada component driling yapıyoruz app -> navi -> CardSummary*/ }
        return (
            <UncontrolledDropdown nav inNavbar className="border text-success">
                <DropdownToggle nav caret className=" text-success">
                <i class="fas fa-shopping-basket"></i>   Basket - {props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                         
                            {cartItem.product.name}
                            - <Badge className="bg-success h6">
                                {cartItem.quantity}
                            </Badge>  <i onClick={()=> { props.removeCart(cartItem.product)}} className="far fa-trash-alt text-danger font-weight-bold h5 mx-3"></i> 
                        </DropdownItem>

                    ))}


                </DropdownMenu>
            </UncontrolledDropdown>)
    }
    const renderEmpty = () => {
    return  (<NavItem>
            <NavLink className ="text-danger border h6">
            <i class="fas fa-shopping-basket"></i>   Basket is Empty
            </NavLink>
        </NavItem>)
    }
    return (
        <div>

            {props.cart.length > 0 ? renderSummary(): renderEmpty()}
        </div>
    )
}

export default CardSummary
