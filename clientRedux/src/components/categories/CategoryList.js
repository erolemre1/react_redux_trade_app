import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from 'reactstrap';
import * as productsAction from "../../redux/actions/productActions";



function CategoryList(props) {
    useEffect(() => {
        props.actions.getCategories()
    }, []);

    const selectCategory = (category) => {
        props.actions.changeCategory(category);
        props.actions.getProducts(category.id)
    }
    return (
        <div>
            <h2 className="bg-warning h3 p-3 mt-2 text-center ">Categories </h2>
            <ListGroup>
                {
                    props.categories.map(category => (
                        <ListGroupItem active={category.id === props.currentCategory.id} key={category.id} onClick={() => selectCategory(category)} >
                          {category.id} - {category.name}
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),

            getProducts: bindActionCreators(productsAction.getProducts, dispatch)


        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);