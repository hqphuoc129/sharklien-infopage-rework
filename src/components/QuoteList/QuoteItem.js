import { Modal, Button } from 'antd';
import { useState } from 'react';
import { QuoteBook, QuoteSharkTank, QuoteCharity } from 'components/QuoteList/QuoteContent';
const QuoteItem = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getContent = (idx) => {
    console.log(idx);
    switch (idx) {
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
    <div className='quote-item-box'>
      <a href={props.news} target="_blank">
      <img className='quote-image' src={props.image} alt='' /></a>
      
      <Button
        type='dash'
        shape='round'
        onClick={showModal}
        style={{
          maxWidth: '75%',
        }}
      >
        {props.title}
      </Button>
      <a href={props.news} target="_blank"><h5 className='sub-title' >{props.subtitle}</h5></a>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        maskClosable={true}
        onCancel={handleCancel}
        cancelButtonProps={{
          style: {
            display: 'none',
          },
        }}
        width={'100rem'}
      >
        {getContent(props.contentIdx)}
      </Modal>
    </div>
  );
};
export default QuoteItem;
