

function ArrayOfObjects(){
    const list = [{name:"Hello World 1"},{name:"Hello World 2"},{name:"Hello World 3"}]
    return(
        <div>
           <h1> ARRAY of Obj </h1>            
                     <ul>

                    {list.map( (v,i)=> {
                    return(
                    <li key={i} > {v.name} </li> )}
                    )
                    }
          </ul>
                     
        </div>
    )
}



export default ArrayOfObjects;