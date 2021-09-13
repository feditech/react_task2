


function Variable(){
    const name= "hello World"
    return(
        <div>

            <h1>Variable===={name}</h1>

        </div>
    )
}


function Obj(){
    const obj ={name:"hellow world object"}
    return(
        <div>

        <h1>OBJECT===== {obj.name}</h1>
        </div>
    )
}



function Array(){
const data =["we","are","united"]
    return(
        <div>
            <h1>ARRAY==== {data}</h1>
        </div>
    )
}

function ArrayOfObject(){
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

function ComplexData(){
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
    return(
        
            <div>
                
                <h1> Complex data </h1>
            <ul>

            {complex.map((v,i)=> 
            {

                return (

                    <li key ={i}> Company===
                    {v.company}
                    <ul>
                        {v.jobs.map((val,ind) =>
                        {
                            return(
                                <li key ={ind}> {val}   </li>
                            )
                        })}
                            

                    </ul>


                     </li>   
                )}

                )
            }
            
           

            </ul>
        
            </div>
        
    )
}
        
        
            
export  {Variable,Obj,Array,ArrayOfObject,ComplexData};