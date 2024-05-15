import "./header.css";
import "./../../App.css";
import { useState } from "react";
import menuBtn from "./../../assets/menu-icon.svg"
import { useTranslation } from 'react-i18next';
import React from 'react'; 


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="header-wrapper">
            <span>{t('header')}</span>
            <div className="menu-btn" onClick={toggleDropdown}>
                <button><img src={menuBtn} alt="" /></button>
                {isOpen && (
                    <div className="menu-layout">
                        <ul>
                            <DropDownItem text={t('lang1')}
                                onClick={() => changeLanguage('hr')} />
                            <hr></hr>
                            <DropDownItem text={t('lang2')}
                                onClick={() => changeLanguage('en')} />
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

function DropDownItem({text, onClick}) {
    return (
        <li className="dropDownItem" onClick={onClick}>{text}</li>
    );
}