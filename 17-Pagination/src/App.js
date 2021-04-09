import './App.css';
import {useState, useEffect} from 'react';
import Deal from './Deal';
import {useFetch} from './customHooks/useFetch';

function App() {
  const {data, loading} = useFetch();
  const [currentPage, setCurrentPage] = useState(0);
  const [deals, setDeals] = useState(null);
    
    useEffect(() => {
        if(loading) return;
        setDeals(data[currentPage]);   
    }, [loading, currentPage])

    const prevPage = () => {
      if(currentPage < 1) {
        setCurrentPage(4);
      }else {
        setCurrentPage(currentPage - 1);
      }
    }
    
    const nextPage = () => {
      if(currentPage > deals.length-1) {
        setCurrentPage(0);
      }else {
        setCurrentPage(currentPage + 1);
      }
    }
    
    if(loading) {
      return <h1 className="loading">LOADING...</h1>
    }

  return (
    <div className="app">
       <h1>Deals Of The Day</h1>
       <section className="deals">
       {
          deals && deals.map((deal) => {
          	return (<Deal key={deal.deal.id} deal={deal.deal}/>);
          })
       }
       </section>
       <section className="buttons">
           <button className="btn" onClick={prevPage}>👈</button>
          {
            data.map((_, index) => {
              return (
                <button 
                      className={`btn ${index === currentPage ? "active-btn" : null}`} 
                      onClick={()=>setCurrentPage(index)}>
                  {index+1}
                </button>
              )})
          }
          <button className="btn" onClick={nextPage}>👉</button>
       </section>
    </div>
  );
}

export default App;
