


function ComplexData() {
    const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
    return (

        <div>

            <h3> Complex data </h3>
            <ul>
                {
                
                complex.map((v, i) => {
                    return (
                        <li key={i}> Company===
                            {v.company}
                            <ul>
                                {v.jobs.map((val, ind) => {
                                    return (
                                        <li key={ind}> {val}   </li>
                                    )
                                })}
                            </ul>
                                    </li>
                    )
                })
                
                }

            </ul>
        </div>

    )
}


export default ComplexData;