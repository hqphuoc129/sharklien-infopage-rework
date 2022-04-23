import React, {useContext} from 'react';
import {Context} from 'components/Language';
import {CustomSelect} from 'react-select-with-icon'

import {FiGlobe} from 'react-icons/fi';
const SelectLang = () => {
    const context = useContext(Context)
    return (
        <>
        <select value={context.locale} onChange={context.selectLanguage}>
            <option value="vn">Viet Nam</option>
            <option value="en">English</option>
        </select>
        </>
    )
}

export  default SelectLang;