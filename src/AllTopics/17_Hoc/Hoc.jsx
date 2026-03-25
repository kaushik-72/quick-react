const HOC = (Wrapper) => {
  let data = "Hi";

  return () => {
    return <Wrapper data={data} />;
  };
  
};

export default HOC;
