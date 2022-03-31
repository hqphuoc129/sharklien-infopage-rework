const QuoteList = (props) => {
  const data = props.data;
  return data.map((item, idx) => {
    return (
      <div key={idx}>
        <img className='quote-image' src={item.image} alt='' />
        <h2 className='quote-image-desc'>{item.title}</h2>
      </div>
    );
  });
};
export default QuoteList;
