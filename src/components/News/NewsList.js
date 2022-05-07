import { Card, Row, Col} from 'antd';
import React, {useState, useEffect} from 'react';
import {isMobile} from "react-device-detect";
import Button from 'react-bootstrap/Button';
import {useDispatch,useSelector} from "react-redux";
import {FormattedMessage, FormattedDate} from 'react-intl';

import VietNam from '../../lang/vn.json';
import {getData_New} from "../../actions";

const NewsList = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getData_New("https://sharklien-backend.herokuapp.com/api/news/get-all-news"))
  },[]); 

  const news_data = useSelector(state => state.fetchNew);

  console.log(news_data) 

  const [pagination ,setPagination] = useState(
    {
      _start: 0, 
      _end : 6,
    }, 
  )

  const [paginationMobile ,setPaginationMobile] = useState(
    {
      _start: 0, 
      _end : 3,
    }, 
  )

  function desktopHandle(start,end){
    console.log(start, end)

    if (end > news_data.data?.length) {
      setPagination({
        _start : start,
        _end : end - 2, 
      })
    }
    else if (end===news_data.data?.length -6){
      setPagination({
        _start : start,
        _end : end + 2, 
      })
    }
    else {
      setPagination({
        _start : start,
        _end : end, 
      })
    }
  }

    function desktopHandle_mobile(start,end){
      console.log(start, end)
      console.log(news_data.data?.length)
      if (end > news_data.data?.length) {
        setPaginationMobile({
          _start : start,
          _end : end - 2, 
        })
      }
      else if (end === news_data.data?.length-3){
        setPaginationMobile({
          _start : start,
          _end : end + 2, 
        })
      }
      else {
        setPaginationMobile({
          _start : start,
          _end : end, 
        })
      }

  }
  

  if (isMobile)
  {
    return (
    <>
    <div className='media-news-container'>
    <Row>
      {news_data.data?.slice(paginationMobile._start , paginationMobile._end).map((post, index) => (
        <Col style={{padding: "2rem"}} xs={24} xl={8} key={index}>
            <a href={post.url} target="_blank">
            <Card title={<div className='media-data-title'>{post.title}</div>} bordered={false}>
                <img className='media-data-img' src={post.thumbnailUrl}/>
            </Card>
            </a>
        </Col>
      ))}
    </Row>
    </div>
    <div className='media-data-btn-container'>
    <Button variant="outline-warning" style={{marginRight: "1rem"}} disabled={paginationMobile._start === 0 } onClick={ ()=> {desktopHandle_mobile(paginationMobile._start - 3,paginationMobile._end - 3)}} ><FormattedMessage id="media.btn-trc" defaultMessage={VietNam['media']['btn-trc']}/></Button>
    <Button variant="outline-warning" style={{marginRight: "1rem"}} disabled={paginationMobile._end === news_data.data?.length || news_data.data?.length <= 3} onClick={ ()=> {desktopHandle_mobile(paginationMobile._start + 3,paginationMobile._end + 3)}}><FormattedMessage id="media.btn-sau" defaultMessage={VietNam['media']['btn-sau']}/></Button>
    </div>
    </>
  );
}
  return (
      <>
      <div className='media-news-container'>
      <Row>
        {news_data.data?.slice(pagination._start, pagination._end).map((post, index) => (
          <Col style={{padding: "2rem"}} xs={24} xl={8} key={index}>
              <a href={post.url} target="_blank">
              <Card style={{height: "100%"}} title={<div className='media-data-title'>{post.title}</div>} bordered={false}>
                  <img className='media-data-img' src={post.thumbnailUrl}/>
              </Card>
              </a>
          </Col>
        ))}
      </Row>
      </div>
      <div className='media-data-btn-container'>
      <Button  variant="outline-warning" style={{marginRight: "1rem"}} disabled={pagination._start === 0 } onClick={ ()=> {desktopHandle(pagination._start - 6,pagination._end - 6)}} ><FormattedMessage id="media.btn-trc" defaultMessage={VietNam['media']['btn-trc']}/></Button>
      <Button  variant="outline-warning" style={{marginLeft: "1rem"}} disabled={pagination._end === news_data.data?.length || news_data.data?.length <= 6} onClick={ ()=> {desktopHandle(pagination._start + 6,pagination._end + 6)}}><FormattedMessage id="media.btn-sau" defaultMessage={VietNam['media']['btn-sau']}/></Button>
      </div>
      </>
    );
};
export default NewsList;