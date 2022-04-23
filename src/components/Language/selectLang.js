import React, {useContext, useState} from 'react';
import {Context} from 'components/Language';
import { NavDropdown } from 'react-bootstrap';

import {FiGlobe} from 'react-icons/fi';
const SelectLang = () => {
    const [isSelected, setIsSelected] = useState("")
    const context = useContext(Context)
    return (
        <>
        <NavDropdown
            title={
                <FiGlobe/>
            }

            value={context.locale} 
            onChange={context.selectLanguage}

            onSelect={context.selectLanguage}

        >
            <NavDropdown.Item value="vn" eventKey={"en"}>VN</NavDropdown.Item>
            <NavDropdown.Item value="en"  onClick={() => (setIsSelected("en"))}>Eng</NavDropdown.Item>
        </NavDropdown>
        <select value={context.locale} title={<FiGlobe/>} onChange={context.selectLanguage}>
            <option value="vn">Viet Nam</option>
            <option value="en">English</option>
        </select>
        </>
    )
}

export  default SelectLang;