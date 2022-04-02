const Header = (props) => {
  return (
    <div
      className='quote-container'
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '450px',
        width: '100%',
      }}
    >
      <h3 className='quote-title'>{props.title}</h3>
      <div className='quote-container-bottom'></div>
    </div>
  );
};

export default Header;
