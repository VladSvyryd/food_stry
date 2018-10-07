const initState = {

products:[
    {id:'1',name:'Egg', number:'10'},
    {id:'2',name:'Butter', number:'1kg'},
    {id:'3',name:'Meat', number:'500g'}
]
}
const projectReducer = (state=initState, action)=>{
    switch (action.type){
        case 'CREATE_PRODUCT':
        console.log('created product', action.product );
        return state;
        case 'CREATE_PRODUCT_ERROR':
        console.log('action error',action.err);
        return state;
        default:
        return state;
    }
return state;

}

export default projectReducer