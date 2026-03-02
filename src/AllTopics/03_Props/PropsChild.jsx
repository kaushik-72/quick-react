

const PropsChild = (props)=>{
    console.log(props)

    let {value1,value2,value3} = props;
    return(
        <>
            <h1>Props Child</h1>
            <h2>Value 1 is: {value1}</h2>          
            <h2>Value 2 is: {value2}</h2>          
            <h3>Value 3 is: {value3.firstName}</h3>          
        </>
    )
}

export default PropsChild;