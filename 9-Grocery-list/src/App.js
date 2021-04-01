import React, { useState, useRef } from 'react';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
	const [groceryList, setGroceryList] = useState([]);
	const [buttonValue, setButtonValue] = useState("Submit");
	const [isRendred, setIsRendred] = useState({
		        added: false, 
		        removed: false, 
		        changed: false,
		        cleared: false,
		        empty: false
	            });
    const inputRef = useRef("");

    const handleSubmit = (e) => {
    	e.preventDefault();
    	if(buttonValue !== "Edit" && inputRef.current.value !== ""){
	    	const itemId = uuidv4();
	        setGroceryList([...groceryList, {id: itemId, name: inputRef.current.value, editing: false}]);
	        setIsRendred({...isRendred, added: true});
	        setTimeout(() => setIsRendred({...isRendred, added: false}), 2000);
	        inputRef.current.value = "";
        } else if(inputRef.current.value === ""){
            setIsRendred({...isRendred, empty: true});
	        setTimeout(() => setIsRendred({...isRendred, empty: false}), 3000);
        } else{
            for( let item of groceryList){
            	if(item.editing){
            		item.name = inputRef.current.value;
            		setIsRendred({...isRendred, changed: true});
            		setTimeout(() => setIsRendred({...isRendred, changed: false}), 2000);
            		inputRef.current.value = "";
            		setButtonValue("Submit");
            		break;
            	}
            }
        }
    }

    document.addEventListener('click', (e)=>{
    	if(e.keyCode === 13){
    		handleSubmit();
    	}
    });

    const deleteItem = (id) => {
    	const newList = groceryList.filter(item => item.id !== id);
    	setGroceryList(newList);
    	setIsRendred({...isRendred, removed: true});
        setTimeout(() => setIsRendred({...isRendred, removed: false}), 2000);
    }

    const editItem = (name, id) => {
    	 for( let item of groceryList){
            if(item.id === id){
                item.editing = true;
                break;
            }
        }
    	setButtonValue("Edit");
        inputRef.current.value = name;
    }

    const clearList = () => {
    	setGroceryList([]);
    	setIsRendred({...isRendred, cleared: true});
        setTimeout(() => setIsRendred({...isRendred, cleared: false}), 2000);
    }

	return (
	    <div className="app">
	{/* Alerts */}
	        <p>
		        {   isRendred.added ? <span className="added">Item Added To The List</span> : 
		            isRendred.removed ? <span className="removed">Item Removed</span> : 
		            isRendred.changed ? <span className="changed">Value Changed</span> : 
		            isRendred.cleared ? <span className="empty">Empty List</span> : ""
		        }
	        </p>
	        <h1>Grocery List</h1>

	{/* Form */}
	        <form onSubmit={handleSubmit}>
	      	  <input type="text" ref={inputRef} id="grocery__name" />
	      	  <button type="submit">{buttonValue}</button>
	        </form>
            {isRendred.empty ? <span className="empty__value">Please Enter a Value !</span> : ""}
	{/* Grocery List*/}
	        <div className="grocery__list">
                <ul>
                    {
                    	groceryList.map(item => (
                    		<li key={item.id}>
	                    	    <p>{item.name}</p>
	                    	    <div className="buttons">
	                    	        <button onClick={()=>editItem(item.name, item.id)}><BiEdit/></button>
	                    	        <button onClick={()=>deleteItem(item.id)}><AiOutlineDelete/></button>
	                    	    </div>
                            </li> 
                    	))
                    }	
                </ul>
            </div>
            {
            	groceryList.length > 0 ? 
            	<button className="clear" onClick={clearList}>Clear Items</button> : ""
            }
	    </div>
	);
}

export default App;
