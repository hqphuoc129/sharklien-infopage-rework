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
      <img className='quote-image' src={props.image} alt='' />
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
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
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
