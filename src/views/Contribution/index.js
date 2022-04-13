import React from 'react';
import Contribute_Descrpition from '../../components/Contrib Header';
import Section_Paragraph from '../../components/Description/Section_Paragraph';
import LotusComponent from 'components/Lotus Component';

import banner from '../../assets/contribute view/conghien07.png';
import lotus from '../../assets/contribute view/bongsen-07.png';
const Contribution = () => {
  return (
    <>
      <Contribute_Descrpition title='Cống hiến' img={banner} lightText={true} />
      {/* <div className='time_desp'>30 năm 1 chặng đường</div> */}
      <div id='temporary' style={{ padding: '70px 0px' , width:"100%", }}>
        <Section_Paragraph
          content={
            'Là một giáo viên dạy Văn trước khi khởi nghiệp Kinh doanh gần 30 năm trước, tôi không ngừng rèn luyện và học hỏi để khí chất của mình như nước: Mềm dẻo khi muốn và cứng rắn khi cần. Trên thương trường, tôi quyết liệt, sáng suốt, gây dựng sự nghiệp rực rỡ từ chính đôi tay của mình. Trong hoạt động xã hội, tôi là người phụ nữ giàu tình cảm và mang trái tim nhân hậu. Trong gia đình, tôi là người vợ, người mẹ hết lòng yêu thương chồng con. Với suy nghĩ lạc quan, hành động tích cực, tâm nguyện kinh doanh vì cộng đồng, tôi là người truyền cảm hứng mạnh mẽ cho thế hệ trẻ: Nghĩ Đẹp - Sống Trách nhiệm - Làm việc Có ích.'
          }
        />
      </div>
      <LotusComponent url={lotus} />
      <div className='container-bar'>
        <div className='contrib-bar'></div>
      </div>
    </>
  );
};

export default Contribution;
