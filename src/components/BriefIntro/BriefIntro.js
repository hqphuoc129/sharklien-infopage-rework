import posterImage from '../../views/Media/assets/1.png';
import HeaderDescription from 'components/Description/Header_Description';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Section_Paragraph from '../Description/Section_Paragraph';
import { Player } from 'video-react';
// import ReactPlayer from 'react-player'
const BriefIntro = () => {
  return (
    <div className='brief-intro-image'>
      <Container fluid={'true'}>
        <HeaderDescription title={'Tôi tri ân tất cả những điều xảy đến trong cuộc đời mình.'} />
        <Row className='brief-intro-row'>
          <Col lg={true}>
            <Section_Paragraph
              content={
                'Tôi là Đỗ Thị Kim Liên, sinh ra tại Mê Linh, Vĩnh Phúc. Xuất thân trong một gia đình có truyền thống làm giáo dục, tôi được định hướng trở thành một cô giáo ngay khi còn nhỏ. Sau khi tốt nghiệp Khoa Ngữ văn của Trường Đại học Sư phạm Hà Nội II, tôi đứng lớp giảng dạy 3 năm, rồi quyết tâm chia tay nghề để vào Nam lập nghiệp. Với hơn 30 năm kinh nghiệm trong lĩnh vực tài chính, điều hành và hoạt động vì cộng đồng, tôi luôn mong muốn được làm việc với những nhà sáng lập và khởi nghiệp trẻ với tư cách vừa là nhà đầu tư chiến lược, vừa là người cố vấn.'
              }
            />
          </Col>

          <Col className='brief-intro-col' lg={true}>
            {/* <ReactPlayer */}
            <h1 className='react-player' url='https://www.youtube.com/watch?v=4J-SzFc-p5Q' width='auto' height='42vh' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BriefIntro;
