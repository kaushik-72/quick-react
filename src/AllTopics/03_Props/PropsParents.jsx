import { useState } from "react";
import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";
import PropsChild3 from "./PropsChild3";

const PropsParents = () =>{
    const [value,setValue] =useState("")
    let data1 = "Helo World";
    let data2 = [10,20,30];
    let data3 = {firstName:"John"}

    function greet (val){
        console.log("Welcome", val);
        setValue(`Welcome ${val}`)
    }

    
    return (

        
        // <div>
        // <h1>Props Parents</h1>
        // <PropsChild data1 ={data1}/>
        // </div>

        <div>
        <h1>Props Parents: {value}</h1>
        
        {/* sending multiple props */}
        <PropsChild
            value1={data1}
            value2={data2}
            value3={data3}
        />

        <hr/>
        {/* sending multiple data in single prop */}
        <PropsChild2 values = {{
            data1,data2,data3
        }}
        />
        <hr/>

        {/* recieve data from child to parent */}
        <PropsChild3
            greet ={greet}
        />
        </div>
    )
}

export default PropsParents;