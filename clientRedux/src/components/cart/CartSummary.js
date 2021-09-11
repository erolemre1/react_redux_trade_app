import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import * as cartActions from "../../redux/actions/cartActions";


function CartSummary(props) {
    const renderEmpty = () => {
        return (
            <NavItem>
                <NavLink className="text-danger border h6 mx-2">
                    <i className="fas fa-shopping-basket"></i>   Basket is Empty
                </NavLink>
            </NavItem>
        )
    }

    const renderSummary = () => {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-success border mx-2">
                    <i className="fas fa-shopping-basket"></i>    Basket - {props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.productID}>
                            <i className="far fa-trash-alt text-danger font-weight-bold h5 mx-3 " onClick={() => props.actions.removeFromCart(cartItem.product)}></i>  {cartItem.product.name}
                            <span className="bg-success text-white mx-4 p-1 rounded">{cartItem.quantity}</span>
                            <DropdownItem divider />
                        </DropdownItem>
                    ))}
                    <DropdownItem className="h3 font-weight-bold ">
                        <NavLink className="text-info">
                            <Link to={"/cart"} >
                                Go To Basket
                            </Link>
                        </NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    return (
        <div>
            {props.cart.length > 0 ? renderSummary() : renderEmpty()}

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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)
