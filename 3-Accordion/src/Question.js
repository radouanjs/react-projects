import React,{useState} from 'react';

const Question = ({id, title, info}) => {
    const [isVisisble, setIsVisisble] = useState(false);
    
    const toggle = () => {
        setIsVisisble(!isVisisble);
    }

	return (
            <div className="question" key={id}>
                <div className="q">
                    <p className="title">{title}</p>
                    <div className="icon" onClick={toggle}>{isVisisble ? "-" : "+"}</div>
                </div>
                <div className="info">
                    <p>{isVisisble ? info : info.substring(0,0)}</p>
                </div>
            </div>
 	       )
}

export default Question;