const PropsChild2 = (props)=>{
console.log(props);

let {data1,data2,data3} = props.values;
return(
    <>
        <h1>Props Child 2</h1>
        <h2>Data1 is : {data1}</h2>
        <h2>Data2 is : {data2}</h2>
        <h2>Data3 is : {data3.firstName}</h2>
    </>
);

}

export default PropsChild2;