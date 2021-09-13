

function ArrayOfObjects(){
    const list = [{name:"Hello World 1"},{name:"Hello World 2"},{name:"Hello World 3"}]
    return(
        <div>
           <h3> ARRAY of Obj </h3>            
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