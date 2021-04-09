import './App.css';
import Header from './Header';
import Cart from './Cart';
import {useGlobalContext} from './context';

function App() {
    const {total, products, clearCart, loading} = useGlobalContext();
    
    return (
	    <div className="App">
	      <Header />
	       {loading ? <h1>Loading<span className="dot dot-1">.</span><span className="dot dot-2">.</span><span className="dot dot-3">.</span></h1> : 
	       	    <div>
		       	    <Cart />
			        <div className="total">
			          <p>Total</p>
			          <p>{`$${total}`}</p>
			        </div>
			        {
			        	products.length > 0 ? 
			        	<button className="clear-btn" onClick={clearCart}>CLEAR CART</button>:
			        	<h3>Empty Cart</h3>
			        }
		        </div>
		    }
	    </div>
    );
}

export default App;
