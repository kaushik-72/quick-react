import PropsChild from "./PropsChild";

const PropsParents = () =>{
    // let data1 = "Hii";
    let data1 = "Hii";
    let data2 = [10,20,30];
    return (

        
        // <div>
        // <h1>Props Parents</h1>
        // <PropsChild data1 ={data1}/>
        // </div>

        <div>
        <h1>Props Parents</h1>
        <PropsChild x ={{data1,data2}}/>
        </div>
    )
}

export default PropsParents;