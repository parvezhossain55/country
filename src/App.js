import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react' 
import Country from './comp/country/country';
import Cart from './comp/Cart/Cart';


function App() {
  const [cart, setCart] = useState([])

const [country, setCountry] = useState([]);
useEffect(() => {
  fetch('https://restcountries.com/v2/all')
  .then(rest=>rest.json())
  .then(data=>setCountry(data)
 
  )

 // .catch(error=>console.log(error))
  
}, []);
const abc =(country)=>{
const newCart=[...cart,country]
setCart(newCart)
}


  



  return (
    <div className="App">
      <h1>Country : {country.length}</h1>
      <h2>Cart : {cart.length}</h2>
      <Cart cart={cart} ></Cart>
      <ul>
          {
            country.map(country => <Country country = {country} abc= {abc} ></Country>) 
          }

      </ul>
     
      
    </div>
  );
}

export default App;
