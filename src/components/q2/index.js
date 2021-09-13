

function Export() {
    return (
        <div>
            <h1> Question2 </h1>
            
            <h3> import Something from anyPackage </h3>

            <h4>
                We have one js file named as anyPackage.js
                <br /><br />
                anyPackage.js
                <br /> <br />
                export default 20;
            </h4>

           
            

            <p>
                import num from './anypackage' <br/>
        it only work for export default
            </p>


            <h3> import {"{something}"} from anyPackage </h3>

            

            <p>
                import {"{num}"} from './anypackage' <br/>
        it wont work for export default (as exported in anyPackage.js)

        </p>
        <br/>
        
        but if anyPackage is exporting multiple components as given below <br />

        <h4>
                We have one js file named as anyPackage.js
                <br /><br />
                anyPackage.js
                <br /> <br />
                export {"{num,num1,num2}"};
            </h4>
          <p>
              in this case  import {"{num}"} from './anypackage' will work smoothly
              <br />
              but if we try to import import {"{num3}"} it wont work because import and export elemets must be same

          </p>

        </div>
    )
}


export default Export;