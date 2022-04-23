import Contribute_Descrpition from '../../components/Contrib Header';
import Section_Paragraph from '../../components/Description/Section_Paragraph';
import LotusComponent from 'components/Lotus Component';
import Section_Paragraph_Item from 'components/Description/Section_Paragraph_Item';
import banner from '../../assets/contribute view/conghien07.jpg';
import lotus from '../../assets/contribute view/bongsen-07.png';
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';
const Contribution = () => {
  return (
    <>
      <Contribute_Descrpition title={<FormattedMessage id="conghien-page.title" defaultMessage={VietNam['conghien-page']['title']}/>} img={banner} lightText={true} />
      <div id='temporary' style={{ padding: '70px 0px' , width:"100%", }}>
        <Section_Paragraph
          content={
            <FormattedMessage id="conghien-page.para1" defaultMessage={VietNam['conghien-page']['para1']}/>
          }
        />
          <div className='para-bold'>
            <Section_Paragraph content={<FormattedMessage id="conghien-page.para1-li-title" defaultMessage={VietNam['conghien-page']['para1-li-title']}/>}/>
          </div>
          <ul>
            <Section_Paragraph_Item content={<FormattedMessage id="conghien-page.para1-li1" defaultMessage={VietNam['conghien-page']['para1-li1']}/>} />
            <Section_Paragraph_Item content={<FormattedMessage id="conghien-page.para1-li2" defaultMessage={VietNam['conghien-page']['para1-li2']}/>} />
            <Section_Paragraph_Item content={<FormattedMessage id="conghien-page.para1-li3" defaultMessage={VietNam['conghien-page']['para1-li3']}/>} />
            <Section_Paragraph_Item content={<FormattedMessage id="conghien-page.para1-li4" defaultMessage={VietNam['conghien-page']['para1-li4']}/>} />
            {/* <Section_Paragraph_Item content={"Bằng khen của Chủ tịch UBND tỉnh Kon Tum, vì “Đã có thành tích xuất sắc trong công tác tài trợ về vật chất cho vùng bị thiên tai lũ lụt”."} />
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
            <Section_Paragraph_Item content={"Bằng khen của Phòng Thương mại & Công nghiệp Việt Nam (VCCI) trao tặng bà Đỗ Thị Kim Liên năm 2006."} /> */}

          </ul>
      </div>
      <LotusComponent url={lotus} />
      <div className='container-bar'>
        <div className='contrib-bar'></div>
      </div>
    </>
  );
};

export default Contribution;
