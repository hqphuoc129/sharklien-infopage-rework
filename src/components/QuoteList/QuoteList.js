import QuoteItem from './QuoteItem';
import { useState } from 'react';
const QuoteList = (props) => {
  const data = props.data;

  return (
    <div className={`quote-list`}>
      {data.map((item, idx) => {
        return <QuoteItem key={idx} image={item.image} title={item.title} />;
      })}
    </div>
  );
};
export default QuoteList;
