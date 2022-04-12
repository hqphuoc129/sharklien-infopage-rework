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
    <div>
      <img className='quote-image' src={props.image} alt='' />
      <Button className='quote-button' block onClick={showModal}>
        {props.title}
      </Button>
      <Modal className='quote-modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={'100rem'}>
        {getContent(props.contentIdx)}
      </Modal>
    </div>
  );
};
export default QuoteItem;
