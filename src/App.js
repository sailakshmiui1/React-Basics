import Navbar from "./Components/Navbar"
import Introduction from "./Components/Introduction"
import Features from "./Components/Features"
import Product from "./Components/Product"

let productInfo = [
   {name:"Apple", description:"A fruit", rating:"5", price:"50"},
   {name:"Mango", description:"A fruit", rating:"3", price:"40"},
   {name:"Apple", description:"A fruit", rating:"5", price:"50"}
]

const App = () => {
return (
    <div>

    {/* <Navbar />
    <Introduction />
    <Features 
    heading ="Skills"
    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
    <Features 
    heading ="Quaalidfication"
    description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
    <Features 
    heading = "Projects"
    description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/> */}
{
        productInfo.map((obj, index)=>{
            <Product 
            name = {obj.name}
            description = {obj.description}
            price = {obj.price}
            rating = {obj.rating}
            />
        })   
}




     {/* <Product name="Apple" description="A fruit" rating="5" price="50" /> */}
{/*      <Product name="Banana" description="A fruit" rating="4" price="20" /> 
     <Product name="Mango" description="A fruit" rating="3" price="40" />  */}
     {/* <Product name="Apple" description="A fruit" rating="5" price="50">
        <p>This is first product</p>
        </Product>
     <Product name="Banana" description="A fruit" rating="4" price="20">    
    <p>some extra info</p>
    <h1>Orange celebrations</h1>
        </Product>
     <Product name="Mango" description="A fruit" rating="3" price="40"/> */}

    </div> 
   
)
}

export default App