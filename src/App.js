
import './App.css';
import {Variable,Obj,Array,ArrayOfObjects,ComplexData} from './components/q1/index'

import Export  from './components/q2';

import {Post,User,UserWithPost} from './components/q3/index'




function App() {
  return (
    <div className="App">
    <Variable />
    <Obj />
    <Array />
    <ArrayOfObjects />
    <ComplexData />

<Export />

<UserWithPost />
    </div>
  );
}

export default App;
