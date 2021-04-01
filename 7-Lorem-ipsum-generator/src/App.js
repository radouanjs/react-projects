import React, {useState, useEffect} from 'react';
import data from './data';

function App(){
	const [value, setValue] = useState(0);
	const [texts, setTexts] = useState([]);

	const getValue = e=>{
		const targetValue = e.target.value;
		setValue(+targetValue);
	}

    const getParagraphs = (value)=>{
    	value = (value <= 0 || value > data.length) ? 1 : value;
    	const paragraphs = data.slice(0, value);
        setTexts(paragraphs);
    }

	return (
		<section className="lorem-ipsum">
		    <header><h1>Tired Of Boring Lorem Ipsum?</h1></header>
		    <article className="inputs">
		        <p>Paragraphs:</p>
		        <input id="number" type="number" value={value} onChange={getValue}/>
		        <button className="refresh-btn" onClick={()=>getParagraphs(value)}>Generate</button>
		    </article>
		    <article className="outputs">
                {
                	texts.map(text=><p>{text}</p>)
                }
		    </article>
		</section>
	)
}

export default App;