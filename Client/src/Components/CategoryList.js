import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useState,useEffect } from "react";

function CategoryList(props) {
    const [data, setData] = useState([])

useEffect(() => {
    getCategories()
   
},[])

  const getCategories= () => {
        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(res=>{
   
       setData(res)

        }   
        )
    }
    return (
        <div>
            <h3>{props.info.title}</h3>
            <ListGroup >
               
                {data.map((category, index) => (
                    <ListGroupItem active = {category.name === props.currentCategory ? true : false}  key={category.id}className="mt-2 border-top " onClick={() => props.changeCategory(category)} >{category.id}-{category.name}</ListGroupItem>
                     
                ))}
            </ListGroup>
            {/* bootsrap active özellliği kullanacağız seçili olanlar mavi olucak */}
            
            {/* <h4>{props.currentCategory}</h4> */}

        </div>
        
    )
}

export default CategoryList
