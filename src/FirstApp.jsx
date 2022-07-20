import PropTypes from 'prop-types';

export const FirstApp = ( {title , subtitle, name } ) => {
  
    if(!title) {
        title = "Hola soy Goku!!!";
    }
    
  return (
    <>
      <h1 data-testid ="test-title" >{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: "Hola, no soy Goku!!!", 
    subtitle: "Soy un guerrero",
    name :  "Pau!!!!"
}