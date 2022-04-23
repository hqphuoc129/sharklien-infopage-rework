import React, {useContext, useState} from 'react';
import {Context} from 'components/Language';
import { NavDropdown } from 'react-bootstrap';
import Select from 'react-select';
import {FiGlobe} from 'react-icons/fi';
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';

const Options = [
    {label: "VN", value: "vn"},
    {label: "ENG", value: "en"},
]

const SelectLang = () => {
    const [isSelected, setIsSelected] = useState("")
    const context = useContext(Context)
    return (
        <>
        <Select value={context.locale} placeholder={<FiGlobe/>}  options={ Options } onChange={context.selectLanguage}/>
        <select value={context.locale} onChange={context.selectLanguage}>
            <option value="vn">Tiếng Việt</option>
            <option value="en">Tiếng Anh</option>
        </select>

        </>
    )
}

export  default SelectLang;