import React from 'react';
import SelectInput from '../toolbox/SelectInput';
import TextInput from '../toolbox/TextInput';

const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange,
errors }
) => {
    return (
        <form onSubmit={onSave}>
            <div className="mt-4 mb-4 text-center">
                <span className="text-success p-2  bg-light  border h2">{product.productID ? "Updated" : "Add"}</span>
            </div>
            <TextInput name="name" label="Product Name" value={product.name} onChange={onChange} error={errors.name}/>
            <SelectInput name="categoryID" label="Category" error= {errors.categoryID} value={product.categoryID || ""} defaultOtions="Select" options={categories.map(category => ({
                value: category.id,
                text: category.name,
            }))}
                onChange={onChange}
                 />
                
            <TextInput name="unitPrice" label="Unit Price" value={product.unitPrice} onChange={onChange} error={errors.unitPrice} />
            <TextInput name="quantityPerUnit" label="Quantity Per Unit" value={product.quantityPerUnit} onChange={onChange} error={errors.quantityPerUnit} />
            <TextInput name="unitsInStock" label="Unit In Stock" value={product.unitsInStock} onChange={onChange} error={errors.unitsInStock} />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
}

export default ProductDetail;
