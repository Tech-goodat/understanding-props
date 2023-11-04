import Product from './components/Product.jsx'

function App() {
  return (
    <div>
        <h1>Products</h1>
       <div className='myProducts'>
         <Product 
         image=""
         name="Pink Sport"
         desc="Adidas Shoe Sneakers, women shoes, purple, white, violet"
         price="KSH 2000"
         size={49}/>
         
         <Product 
         image=""
         name="air jordans"
         desc="best shoe in the market"
         price="KSH 3000"
         size={50}/>
         <Product 
         image=""
         name="Air force"
         desc="High end shoe"
         price="KSH 5000"
         size={32}/>
        </div> 
    </div>
  )
}

export default App