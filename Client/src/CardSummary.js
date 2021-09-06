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
                    Basket - {props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            {cartItem.product.name}
                            - <Badge className="bg-success">
                                {cartItem.quantity}
                            </Badge>
                        </DropdownItem>

                    ))}


                </DropdownMenu>
            </UncontrolledDropdown>)
    }
    const renderEmpty = () => {
    return  (<NavItem>
            <NavLink className ="text-danger border">
                Basket is Empty
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
