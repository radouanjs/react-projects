import './App.css';
import Preferences from './Preferences';
import Question from './Question';
import Score from './Score';
import {useGlobalContext} from './context';

function App() {
  const {isPrefOpen,isQuestionOpen,isScoreOpen} = useGlobalContext();
  return (
    <>
       {isPrefOpen && <Preferences />} 
       {isQuestionOpen && <Question />} 
       {isScoreOpen && <Score />} 
    </>
  );
}

export default App;
