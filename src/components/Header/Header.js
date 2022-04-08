const Header = (props) => {
  return (
    <div className='quote-container'>
      <h3 className='quote-title'>{props.title}</h3>
      <div className='quote-container-bottom'></div>
    </div>
  );
};

export default Header;
