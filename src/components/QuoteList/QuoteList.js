import QuoteItem from './QuoteItem';

const QuoteList = (props) => {
  const data = props.data;

  return (
    <div className={`quote-list`}>
      {data.map((item, idx) => {
        return <QuoteItem key={idx} image={item.image} title={item.title} news={item.news} subtitle={item.subtitle} contentIdx={idx} />;
      })}
    </div>
  );
};
export default QuoteList;
