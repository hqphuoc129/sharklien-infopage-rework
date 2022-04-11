import QuoteItem from './QuoteItem';
import { useState } from 'react';
import { Modal, Button } from 'antd';
import { QuoteBook, QuoteSharkTank, QuoteCharity } from 'components/QuoteList/QuoteContent';
const QuoteList = (props) => {
  const data = props.data;
  const getContent = (active) => {
    console.log(active);
    switch (active) {
      case 0:
        return <QuoteSharkTank />;
      case 1:
        return <QuoteBook />;
      case 2:
        return <QuoteCharity />;
      default:
        return <></>;
    }
  };
  return (
    <div className={`quote-list`}>
      {data.map((item, idx) => {
        return (
          <>
            <QuoteItem key={idx} image={item.image} title={item.title} />
            <Button
              type='primary'
              onClick={() => {
                props.showModal();
                props.setHidden(idx);
              }}
            >
              {item.title}
            </Button>
            <Modal visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
              {getContent(props.hidden)}
            </Modal>
          </>
        );
      })}
    </div>
  );
};
export default QuoteList;
