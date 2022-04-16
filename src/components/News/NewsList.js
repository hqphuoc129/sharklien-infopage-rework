import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
const NewsList = ({ postsToRender }) => {
return (
    <>
    <Row>
      {postsToRender.map((post, index) => (
                <Col style={{padding: "2rem"}} xs={24} xl={8} key={index}>
                    <a href={post.url} target="_blank">
                    <Card title={<div className='media-data-title'>{post.title}</div>} bordered={false}>
                        <img className='media-data-img' src={post.thumbnailUrl}/>
                    </Card>
                    </a>
                </Col>
                ))}
    </Row>
    </>
  );
};
export default NewsList;