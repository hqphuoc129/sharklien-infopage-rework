import React from 'react';
import HeaderQuoteImg from '../Biography/assets/tieusu07.png';
import Header from 'components/Header/Header';
import HeaderDescription from "../../components/Description/Header_Description";
import Section_Paragraph from "../../components/Description/Section_Paragraph";


const Biography = () => {
    return < >

        <
        Header img = { HeaderQuoteImg }
    title = { 'TIỂU SỬ' }
    /> <
    div style = {
            { backgroundColor: "#f7f7f7", margin: "0 10% 0 10%", minHeight: "100rem", width: "auto" } } >
        <
        HeaderDescription title = { "Tôi là Đỗ Thị Kim Liên" }
    /> <
    div style = {
        { paddingTop: "2.5%", paddingBottom: "2.5%" } } > < hr style = {
        { borderColor: "#c69703", width: "20%", margin: "auto" } }
    /></div >
    <
    div >
        <
        Section_Paragraph content = { "Sinh ra tại Mê Linh, Vĩnh Phúc. Xuất thân trong một gia đình có truyền thống làm giáo dục, tôi được định hướng trở thành một cô giáo ngay khi còn nhỏ. Sau khi tốt nghiệp Khoa Ngữ văn của Trường Đại học Sư phạm Hà Nội II, tôi đứng lớp giảng dạy 3 năm, rồi quyết tâm chia tay nghề để vào Nam lập nghiệp." }
    /> <
    Section_Paragraph content = { "Với hơn 30 năm kinh nghiệm trong lĩnh vực tài chính, điều hành và hoạt động vì cộng đồng, tôi luôn mong muốn được làm việc với những nhà sáng lập và khởi nghiệp trẻ với tư cách vừa là nhà đầu tư chiến lược, vừa là người cố vấn." }
    /> <
    Section_Paragraph content = { "Một số vị trí mà tôi đã, đang đảm nhiệm: Nhà sáng lập Ứng dụng bảo hiểm công nghệ LIAN (từ năm 2018 đến nay); Chủ tịch Quỹ Hỗ trợ xây dựng Môi trường Xanh Việt Nam (từ năm 2016 đến nay); Hiệu trưởng Trường Đào tạo Quản lý Doanh nghiệp – CBAM (từ năm 2016 đến nay); Chủ tịch Hội đồng quản trị Tập đoàn AquaOne, chuyên đầu tư các dự án cung cấp nước sạch, hạ tầng giao thông theo hình thức BOT (từ năm 2015 đến nay); Chủ tịch Hội đồng quản trị Công ty Cổ phần Nước mặt Sông Đuống (từ năm 2015 đến nay); Cố vấn cấp cao Công ty Cổ phần Bảo hiểm Viễn Đông – VASS (từ năm 2013 đến nay); Nhà sáng lập, Chủ tịch Công ty TNHH Đầu tư AAA Plus (từ năm 2013 đến nay); Nguyên Chủ tịch, Tổng giám đốc Công ty CP Bảo hiểm AAA (2005-2012)." }
    /> <
    Section_Paragraph content = { "Ngoài ra, trên cương vị Lãnh sự Danh dự Cộng hòa Nam Phi tại TP.HCM suốt hơn 10 năm, tôi đã có những đóng góp không ngừng nghỉ thúc đẩy quan hệ hữu nghị giữa hai nước Việt Nam – Nam Phi; Xây những  “chiếc  cầu  nối doanh nghiệp” góp phần phát triển nền kinh tế của hai quốc gia." }
    /> <
    Section_Paragraph content = { "Từ năm 2019, tôi tham gia Shark Tank Việt Nam trên cương vị Nhà đầu tư chính với mục tiêu làm “bà đỡ” cho thế hệ trẻ." }
    /> <
    /div> <
    div style = {
        { paddingTop: "2.5%", paddingBottom: "2.5%" } } > < hr style = {
        { borderColor: "#c69703", width: "20%", margin: "auto" } }
    /></div >
    <
    /div> <
    />;
};

export default Biography;