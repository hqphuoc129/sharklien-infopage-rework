import React, {createContext,useState} from 'react';
import {IntlProvider} from 'react-intl';
import VietNam from '../../lang/vn.json';
import English from '../../lang/en.json';
import flatten from 'flat';

const local = navigator.language; 
let lang;

export const Context = createContext();

if (local === 'en') {
    lang = English;
 }else {
    if (local === 'vn') {
        lang = VietNam;
    }
 }


const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);

   function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'en') {
        setMessages(English);
    } else {
        if (newLocale === 'vn'){
            setMessages(VietNam);
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages && flatten(messages)} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    )
}


export default Wrapper;

