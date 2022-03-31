const QuoteItem = (props) => {
  return (
    <div>
      <img className='quote-image' src={props.image} alt='' />
      <h2 className='quote-image-desc'>{props.title}</h2>
    </div>
  );
};
export default QuoteItem;
