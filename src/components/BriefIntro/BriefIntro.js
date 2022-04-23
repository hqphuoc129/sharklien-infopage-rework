import posterImage from '../../views/Media/assets/1.png';
import HeaderDescription from 'components/Description/Header_Description';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Section_Paragraph from '../Description/Section_Paragraph';
import { Player } from 'video-react';

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';
import ReactPlayer from 'react-player'
const BriefIntro = () => {
  return (
    <div className='brief-intro-image'>
      <Container fluid={'true'} className="brief-intro-container">
        <h2 className="para-header">
          <FormattedMessage id="home-page.title-section-intro" defaultMessage={VietNam['home-page']["title-section-intro"]}/>
        </h2>
        <Row className='brief-intro-row'>
          <Col lg={true}>
            <p className="para">
            <FormattedMessage id="home-page.intro-para" defaultMessage={VietNam['home-page']["intro-para"]}/>
            </p>
          </Col>

          <Col className='brief-intro-col' lg={true}>
            <ReactPlayer
            className='react-player' url='https://www.youtube.com/watch?v=4J-SzFc-p5Q' width='auto' height='42vh' controls = {"true"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BriefIntro;
