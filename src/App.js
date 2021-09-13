
import './App.css';
import {Variable,Obj,Array,ArrayOfObjects,ComplexData} from './components/q1/index'

import Export  from './components/q2';




function App() {
  return (
    <div className="App">
    <Variable />
    <Obj />
    <Array />
    <ArrayOfObjects />
    <ComplexData />

<Export />
    </div>
  );
}

export default App;
