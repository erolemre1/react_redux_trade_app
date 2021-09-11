import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from './ProductDetail';



function AddorUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    onChange,
    onSave,
    ...props

}) {
    const [product, setProduct] = useState({ ...props.product });
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (categories.length == 0) {
            getCategories();
        }
        setProduct({ ...props.product })
    }, [props.product]);

    function handleChange(e) {
        const { name, value } = e.target;

        setProduct(previousProduct => ({ ...previousProduct, [name]: name === "categoryID" ? parseInt(value, 10) : value }))
        validate(name,value);
     
       
    }
function validate(name,value){
    if(name==="name" && value === ""){
        setErrors(previousErrors =>({...previousErrors,name:"Product name required!!!"}))
    }else{
        setErrors(previousErrors =>({...previousErrors,name:""}))
    }

    if(name==="unitPrice" && value === ""){
        setErrors(previousErrors =>({...previousErrors,unitPrice:"Unit Price  required!!!"}))
    }else{
        setErrors(previousErrors =>({...previousErrors,unitPrice:""}))
    }
    if(name==="unitsInStock" && value === ""){
        setErrors(previousErrors =>({...previousErrors,unitsInStock:"Units In Stock  required!!!"}))
    }else{
        setErrors(previousErrors =>({...previousErrors,unitsInStock:""}))
    }
    if(name==="quantityPerUnit" && value === ""){
        setErrors(previousErrors =>({...previousErrors,quantityPerUnit:"Quantity Per Unit required!!!"}))
    }else{
        setErrors(previousErrors =>({...previousErrors,quantityPerUnit:""}))
    }
    if(name==="categoryID" && value === ""){
        setErrors(previousErrors =>({...previousErrors,categoryID:"Category required!!!"}))
    }else{
        setErrors(previousErrors =>({...previousErrors,categoryID:""}))
    }
    
}

    function handleSave(e) {
        e.preventDefault();
        saveProduct(product).then(() => {
            history.push("/")
        })
    }
    return (
        <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave} errors={errors}/>

    )

}
export function getProductById(products, productID) {
    let product = products.find(product => product.productID == productID) || null;
    return product;
}

function mapStateToProps(state, ownProps) {
    const productID = ownProps.match.params.productID
    const product = productID && state.productListReducer.length > 0 ? getProductById(state.productListReducer, productID) : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }

}

const mapDispatchToProps = {
    getCategories,saveProduct
}

export default connect(mapStateToProps,mapDispatchToProps)(AddorUpdateProduct);