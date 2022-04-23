import React from 'react';
import HeaderQuoteImg from '../Biography/assets/tieusu07.jpg';
import Contribute_Descrpition from '../../components/Contrib Header/index';
import HeaderDescription from '../../components/Description/Header_Description';
import Section_Paragraph from '../../components/Description/Section_Paragraph';
import Section_Paragraph_Item from 'components/Description/Section_Paragraph_Item';

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';

const Biography = () => {
  return (
    <>
      <Contribute_Descrpition img={HeaderQuoteImg} title={<FormattedMessage id="tieusu-page.title" defaultMessage={VietNam['tieusu-page']['title']}/>} lightText={false}/>{' '}
      <div className='bio-container'>
        <HeaderDescription title={<FormattedMessage id="tieusu-page.para1" defaultMessage={VietNam['tieusu-page']['para1']}/>} />{' '}
        <div style={{ paddingTop: '2.5%', paddingBottom: '2.5%' }}>
          {' '}
          <div style={{width: '20vw', height: "0.5vh", backgroundColor:"#C69703", margin: 'auto'}} />
        </div>
        <div>
          <Section_Paragraph
            content={
              'Sinh ra tại Mê Linh, Vĩnh Phúc. Xuất thân trong một gia đình có truyền thống làm giáo dục, tôi được định hướng trở thành một cô giáo ngay khi còn nhỏ. Sau khi tốt nghiệp Khoa Ngữ văn của Trường Đại học Sư phạm Hà Nội II, tôi đứng lớp giảng dạy 3 năm, rồi quyết tâm chia tay nghề để vào Nam lập nghiệp.'
            }
          />{' '}
          <Section_Paragraph
            content={
              'Với hơn 30 năm kinh nghiệm trong lĩnh vực tài chính, điều hành và hoạt động vì cộng đồng, tôi luôn mong muốn được làm việc với những nhà sáng lập và khởi nghiệp trẻ với tư cách vừa là nhà đầu tư chiến lược, vừa là người cố vấn.'
            }
          />{' '}
          <Section_Paragraph
            content={
              'Một số vị trí mà tôi đã, đang đảm nhiệm: Nhà sáng lập Ứng dụng bảo hiểm công nghệ LIAN (từ năm 2018 đến nay); Chủ tịch Quỹ Hỗ trợ xây dựng Môi trường Xanh Việt Nam (từ năm 2016 đến nay); Hiệu trưởng Trường Đào tạo Quản lý Doanh nghiệp – CBAM (từ năm 2016 đến nay); Chủ tịch Hội đồng quản trị Tập đoàn AquaOne, chuyên đầu tư các dự án cung cấp nước sạch, hạ tầng giao thông theo hình thức BOT (từ năm 2015 đến nay); Chủ tịch Hội đồng quản trị Công ty Cổ phần Nước mặt Sông Đuống (từ năm 2015 đến nay); Cố vấn cấp cao Công ty Cổ phần Bảo hiểm Viễn Đông – VASS (từ năm 2013 đến nay); Nhà sáng lập, Chủ tịch Công ty TNHH Đầu tư AAA Plus (từ năm 2013 đến nay); Nguyên Chủ tịch, Tổng giám đốc Công ty CP Bảo hiểm AAA (2005-2012).'
            }
          />{' '}
          <Section_Paragraph
            content={
              'Ngoài ra, trên cương vị Lãnh sự Danh dự Cộng hòa Nam Phi tại TP.HCM suốt hơn 10 năm, tôi đã có những đóng góp không ngừng nghỉ thúc đẩy quan hệ hữu nghị giữa hai nước Việt Nam – Nam Phi; Xây những  “chiếc  cầu  nối doanh nghiệp” góp phần phát triển nền kinh tế của hai quốc gia.'
            }
          />{' '}
          <Section_Paragraph
            content={
              'Từ năm 2019, tôi tham gia Shark Tank Việt Nam trên cương vị Nhà đầu tư chính với mục tiêu làm “bà đỡ” cho thế hệ trẻ.'
            }
          />{' '}
          <div className='para-bold'>
            <Section_Paragraph content={"Một số giải thưởng tiêu biểu trong sự nghiệp của tôi:"}/>
          </div>
          <ul>
            <Section_Paragraph_Item content={"Thư khen từ Chính phủ Nam Phi vì những cống hiến không ngừng của bà Đỗ Thị Kim Liên trong việc hỗ trợ và quảng bá hình ảnh đất nước Nam Phi tại Việt Nam năm 2018."} />
            <Section_Paragraph_Item content={"Huân chương Lao động hạng III do Chủ tịch nước trao tặng bà Đỗ Thị Kim Liên năm 2012."} />
            <Section_Paragraph_Item content={"Bằng khen của Thủ tướng Chính phủ trao tặng bà Đỗ Thị Kim Liên vì “Đã có thành tích xuất sắc trong công tác quản lý, điều hành hoạt động sản xuất, kinh doanh” và đạt danh hiệu “Doanh nhân Việt Nam tiêu biểu năm 2007”, góp phần vào sự nghiệp xây dựng Chủ nghĩa xã hội và bảo vệ Tổ quốc."} />
            <Section_Paragraph_Item content={'Bằng khen của Chủ tịch UBND TP.HCM trao tặng bà Đỗ Thị Kim Liên vì “Đã có thành tích hoàn thành xuất sắc trong các phong trào thi đua liên tục 5 năm, góp phần tích cực trong phong trào thi đua của TP.HCM nhân Đại hội thi đua yêu nước TP.HCM lần thứ V (2005- 2010)".'} />
            <Section_Paragraph_Item content={"Bằng khen của Chủ tịch UBND tỉnh Kon Tum, vì “Đã có thành tích xuất sắc trong công tác tài trợ về vật chất cho vùng bị thiên tai lũ lụt”."} />
            <Section_Paragraph_Item content={"Giải thưởng “Bông Hồng Vàng năm 2010” do Hội đồng Doanh nhân nữ Việt Nam thuộc Phòng Thương mại & công nghiệp Việt Nam (VCCI) trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Giải thưởng “Doanh nhân xuất sắc Đất Việt năm 2010” do Bộ Công Thương trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Doanh nhân nữ Việt Nam tiêu biểu năm 2009 – Cúp Bông hồng vàng và Kỷ niệm chương đạt Cúp Bông hồng vàng 4 năm liền (2006 – 2009) do Hội đồng Doanh nhân nữ Việt Nam thuộc Phòng Thương mại & công nghiệp Việt Nam (VCCI) trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Bằng khen của Chủ tịch UBND TP.HCM “Đã có thành tích hoàn thành xuất sắc trong sản xuất kinh doanh và hỗ trợ xây dựng Hội ngành nghề năm 2009, góp phần phát triển Hiệp hội Doanh nghiệp thành phố”."} />
            <Section_Paragraph_Item content={"Doanh nhân Sài Gòn tiêu biểu năm 2008 và 2009 do Hiệp hội Doanh nghiệp TP. HCM bình chọn và trao tặng Kỷ niệm chương cho bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Cúp Vàng “Giám đốc Tài năng lần I năm 2009” do Bộ Công thương – Bộ Lao động thương binh và xã hội cùng các sở ban ngành trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Cúp Vàng “Nữ Doanh nhân Việt Nam vì sự tiến bộ cộng đồng” năm 2008 của Hiệp Hội các Doanh nghiệp nhỏ & vừa Việt Nam trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Cúp Thánh Gióng tôn vinh 100 doanh nhân Việt Nam tiêu biểu năm 2008 do Phòng Thương mại & Công nghiệp Việt Nam (VCCI) trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Bằng khen của Chủ tịch UBND TP.HCM “Đã có thành tích xuất sắc được tuyên dương “Nữ doanh nhân đảm đang – thành đạt” TP.HCM lần I – 2008, góp phần tích cực trong phong trào thi đua của Thành phố."} />
            <Section_Paragraph_Item content={"Đại biểu tham dự Hội nghị Thượng đỉnh Phụ nữ Toàn cầu năm 2008 tại Hà Nội và Đại biểu tham dự Hội nghị APEC Việt Nam năm 2006."} />
            <Section_Paragraph_Item content={"Danh hiệu “Nữ Doanh nhân đảm đang – thành đạt lần 1 năm 2008” do Ban Thường vụ Hội Liên hiệp Phụ nữ TP.HCM trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Cúp “Vì Sự tiến bộ của Phụ nữ” do Hội Liên hiệp Phụ nữ & Ủy ban Quốc gia vì sự tiến bộ của Phụ nữ Việt Nam trao tặng bà Đỗ Thị Kim Liên năm 2007."} />
            <Section_Paragraph_Item content={"Bằng khen của Phòng Thương mại & Công nghiệp Việt Nam (VCCI) trao tặng bà Đỗ Thị Kim Liên danh hiệu “Doanh nhân tiêu biểu Khối doanh nghiệp Trung ương năm 2007”."} />
            <Section_Paragraph_Item content={"Cúp “Nữ Doanh nhân thành đạt năm 2007” do Hội Liên hiệp Phụ nữ Việt Nam trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Giải thưởng “Bông hồng vàng” 5 năm liền (2006 – 2010) do Hội Liên hiệp Phụ nữ Việt Nam và Phòng Thương Mại & Công nghiệp Việt Nam (VCCI) trao tặng bà Đỗ Thị Kim Liên."} />
            <Section_Paragraph_Item content={"Bằng khen của Phòng Thương mại & Công nghiệp Việt Nam (VCCI) trao tặng bà Đỗ Thị Kim Liên năm 2006."} />

          </ul>
         
        </div>{' '}
        <div style={{ paddingTop: '2.5%', paddingBottom: '2.5%' }}>
          {' '}
          <div style={{width: '20vw', height: "0.5vh", backgroundColor:"#C69703", margin: 'auto'}} />
        </div>
      </div>{' '}
    </>
  );
};

export default Biography;
