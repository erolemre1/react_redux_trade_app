import * as actionTypes from "./actionTypes";

export function changeCategory(category) {

    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }

}

export function getCategoriesSuccess(categories) {

    return {
        type: actionTypes.GET_CATEGORYES_SUCCESS,
        payload: categories
    }
}
export function getCategories(){
    /// redux thunk ile apiye bağlanıcaz
    return function (dispatch) {
        let url = "http://localhost:3000/categories"
        return fetch(url)
            .then(response => response.json())
            .then(res => dispatch(getCategoriesSuccess(res)))
            
    }
    

}
