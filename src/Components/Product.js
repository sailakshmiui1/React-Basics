const Product = (props) =>{
    return(
     <div style={{backgroundColor:"firebrick"}}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.rating}</p>
        <p>{props.price}</p>

        {/* {props.children} */}
        </div>
    )
}
export default Product

// const Product = ({name, description, rating, price}) =>{
//     // console.log(props)
//     // let obj = {name:"Apple", des: "A fruit", rating:"4", price:"10"}
//         // let  {name, des, rating, price} = obj; //destructring
//     return(
//      <div style={{backgroundColor:"firebrick"}}>
//         <h2>{name}</h2>
//         <p>{description}</p>
//         <p>{rating}</p>
//         <p>{price}</p>
      
//         </div>
//     )
// }
// export default Product