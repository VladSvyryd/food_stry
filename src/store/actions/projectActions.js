export const createProduct = (product)=>{
    return(dispatch, getState,{getFirebase, getFirestore})=>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...product,
            authorFirstName:'Ninja',
            authorLastName:'Silent',
            authorId:1234,
            createdAt:new Date()
        }).then(()=>{
            dispatch({
                type:'CREATE_PRODUCT', product
            })
        }).catch((err)=>{
            dispatch({
                type:'CREATE_PRODUCT_ERROR', err
            })
        })
        
    }
}