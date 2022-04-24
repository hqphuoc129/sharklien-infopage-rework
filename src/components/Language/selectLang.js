import React, {useContext, useState} from 'react';
import {Context} from 'components/Language';
import { NavDropdown } from 'react-bootstrap';
import "antd/dist/antd.css"; 
import {Select} from "antd";
import {FiGlobe} from 'react-icons/fi';
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';

const Options = [
    {label: "VN", value: "vn"},
    {label: "ENG", value: "en"},
]

const {Option} = Select;

const SelectLang = () => {
    const [isSelected, setIsSelected] = useState("vn")
    const context = useContext(Context)
    return (
        <>

        <Select
            suffixIcon = {<FiGlobe/>}
            value={context.locale}
            onChange={(val) => context.selectLanguage(val)}
            labelInValue
            style={{display: "none"}}
        >
            <Option value="vn"> Tiếng Việt</Option>
            <Option value="en"> Tiếng Anh</Option>
        </Select>
        <select value={context.locale} onChange={context.selectLanguage} className="btn-change-lang">
            {console.log(VietNam['lang-vie'])}
           <FormattedMessage id="lang-vie" defaultMessage={VietNam['lang-vie']}>{(text) => <option value="vn">{text}</option>}</FormattedMessage>            
           <FormattedMessage id="lang-en" defaultMessage={VietNam['lang-en']}>{(text) => <option value="en">{text}</option>}</FormattedMessage>    
        </select>

        </>
    )
}

export  default SelectLang;