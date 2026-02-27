

const PropsChild = (props)=>{
    console.log(props)
    return(
        <>
            <h1>Props Child</h1>
            <h1>{props.x.data1}</h1>
            <h1>{props.x.data2}</h1>
            
        </>
    )
}

export default PropsChild;