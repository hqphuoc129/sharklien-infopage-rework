import { Card, Row, Col} from 'antd';
import React, {useState, useEffect} from 'react';
import NewsData from "./NewsData";
import {isMobile} from "react-device-detect";
import Button from 'react-bootstrap/Button';
const NewsList = () => {

  const [pagination ,setPagination] = useState(
      NewsData.pagination,
  )

  const [paginationMobile ,setPaginationMobile] = useState(
    NewsData.pagination_mobile,
  )
   
  function desktopHandle(start,end){
    console.log(start, end)
    console.log(NewsData.data.length)
    if (end > NewsData.data.length) {
      setPagination({
        _start : start,
        _end : end - 2, 
      })
    }
    else if (end===NewsData.data.length -6){
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
      console.log(NewsData.data.length)
      if (end > NewsData.data.length) {
        setPaginationMobile({
          _start : start,
          _end : end - 2, 
        })
      }
      else if (end === NewsData.data.length-3){
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
    <Row>
      {NewsData.data.slice(paginationMobile._start , paginationMobile._end).map((post, index) => (
        <Col style={{padding: "2rem"}} xs={24} xl={8} key={index}>
            <a href={post.url} target="_blank">
            <Card title={<div className='media-data-title'>{post.title}</div>} bordered={false}>
                <img className='media-data-img' src={post.thumbnailUrl}/>
            </Card>
            </a>
        </Col>
      ))}
    </Row>
    <Button type="link" disabled={paginationMobile._start === 0 } onClick={ ()=> {desktopHandle_mobile(paginationMobile._start - 3,paginationMobile._end - 3)}} >Trang trước</Button>
    <Button type="link" disabled={paginationMobile._end === NewsData.data.length } onClick={ ()=> {desktopHandle_mobile(paginationMobile._start + 3,paginationMobile._end + 3)}}>Trang sau</Button>
    </>
  );
}
  return (
      <>
      <div className='media-news-container'>
      <Row>
        {NewsData.data.slice(pagination._start, pagination._end).map((post, index) => (
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
      <Button  variant="outline-warning" style={{marginRight: "1rem"}} disabled={pagination._start === 0 } onClick={ ()=> {desktopHandle(pagination._start - 6,pagination._end - 6)}} >Trang trước</Button>
      <Button  variant="outline-warning" style={{marginLeft: "1rem"}} disabled={pagination._end === NewsData.data.length } onClick={ ()=> {desktopHandle(pagination._start + 6,pagination._end + 6)}}>Trang sau</Button>
      </div>
      </>
    );
};
export default NewsList;