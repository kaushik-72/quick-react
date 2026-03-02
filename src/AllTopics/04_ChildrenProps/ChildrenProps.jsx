const ChildrenProps = () => {

    let user = ["John Doe","Jane Doe", "James Doe"]
  return (
    <div>
    <h1>ChildrenProps</h1>
    {user.map((name,idx)=>{
        return <Card key={idx}>{name}</Card>
    })}
    </div>
  );
}

export default ChildrenProps;

const Card = (props)=>{
    return(
        <>
            <h1>I'm Card</h1>
            <p>Welcome {props.children}</p>
        </>
    )
}