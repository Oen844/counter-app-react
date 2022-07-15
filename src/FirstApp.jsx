import PropTypes from 'prop-types';

export const FirstApp = ( {title , subtitle} ) => {
  
    if(!title) {
        title = "Hola soy Goku!!!";
    }
    
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle + 1}</p>
    </>
  );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}