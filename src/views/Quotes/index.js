import React from 'react';
import Header from 'components/Header/Header';
import HeaderQuoteImg from 'views/Quotes/assets/quotes-07.jpg';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';
import Contribute_Descrpition from '../../components/Contrib Header/index';
import { Modal, Button } from 'antd';
import { useState } from 'react';
import { QuoteBook, QuoteSharkTank, QuoteCharity } from 'components/QuoteList/QuoteContent';
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';

const QUOTE_DATA = [
  { image: QuoteImageOne, title: <FormattedMessage id="quotes-page.btn-sharktank" defaultMessage={VietNam['quotes-page']['btn-sharktank']}/>},
  { image: QuoteImageTwo, title: <FormattedMessage id="quotes-page.btn-sach" defaultMessage={VietNam['quotes-page']['btn-sach']}/>},
  { image: QuoteImageThree, title: <FormattedMessage id="quotes-page.btn-goitinh" defaultMessage={VietNam['quotes-page']['btn-goitinh']}/>},
];

const Quotes = () => {
  return (
    <>
      <Contribute_Descrpition img={HeaderQuoteImg} title={<FormattedMessage id="quotes-page.title" defaultMessage={VietNam['quotes-page']['title']}/>} lightText={true} /> 
      <h1 className='box-underheader'> </h1>
      <div className='content-quote'>
        <h1 className='quote-heading'><FormattedMessage id="quotes-page.title-quotes1" defaultMessage={VietNam['quotes-page']['title-quotes1']}/></h1>
        <h1 className='quote-heading'><FormattedMessage id="quotes-page.title-quotes2" defaultMessage={VietNam['quotes-page']['title-quotes2']}/></h1>
      </div>
      <div className={`box-quotedata`}>
        <QuoteList data={QUOTE_DATA} />
      </div>
      <div className={`box-footering`}>
        <h1 className='quote-footerone'>"Đã không mơ thì thôi, </h1>
        <h1 className='quote-footertwo'>Mơ thì phải Mơ cho lớn"</h1>
      </div>
    </>
  );
};

export default Quotes;
