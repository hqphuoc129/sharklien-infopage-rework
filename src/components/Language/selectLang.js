import React, {useContext, useState} from 'react';
import {Context} from 'components/Language';
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

    const toggle = () => {setisOpen(!isOpen)} 
    const [isOpen, setisOpen] = useState(false)
    const context = useContext(Context)
    return (
        <>
        <div style={{height: 'auto', width: '4rem', display:"none"}}
            onClick = {()=> (toggle())}
            >Clickme</div>
        { isOpen && (<div style={{height: 'auto', width: '7rem', backgroundColor: "black", position:"absolute", top: "5rem"}} >Opened</div>)} 
        <select value={context.locale} onChange={context.selectLanguage} className="btn-change-lang">
            {console.log(VietNam['lang-vie'])}
           <FormattedMessage id="lang-vie" defaultMessage={VietNam['lang-vie']}>{(text) => <option value="vn">{text}</option>}</FormattedMessage>            
           <FormattedMessage id="lang-en" defaultMessage={VietNam['lang-en']}>{(text) => <option value="en">{text}</option>}</FormattedMessage>    
        </select>

        </>
    )
}

export  default SelectLang;