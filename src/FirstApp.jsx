// const newMessage = {
//     message: 'Hola mundo',
//     id: 123454,
    
// };
const getResult = ( a, b) => {
    return a + b;
}
const saludo = () => {
    return (
       "Hola mundo"
    )
}

export const FirstApp = () => {
  
  return (
    <>
      <h1>{getResult( 5, 5)}</h1>
      <p>This is the first app</p>
    </>
  );
}
