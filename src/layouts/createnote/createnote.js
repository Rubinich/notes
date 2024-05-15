import { React, useState, useEffect } from "react";
import HeaderAdd from "../header-add/header-add.js";
import { useTranslation } from 'react-i18next';


function CreateNote({ textHandler, saveHandler, inputText, maxLength  }) {
    const [remainingCharacters, setRemainingCharacters] = useState(maxLength);

    useEffect(() => {
        setRemainingCharacters(maxLength - inputText.length);
    }, [inputText]);
    maxLength = 1000;

    const { t } = useTranslation();
    return (
        <>
            <HeaderAdd saveHandler={saveHandler}/>
            <div className="note" style={{ background: "rgb(43, 108, 255)" }}> 
                <textarea
                    cols="10"
                    rows="17"
                    value={inputText}
                    placeholder= {t('placeholder')}
                    onChange={textHandler}
                    maxLength={maxLength}
                ></textarea>
                <div className="character-counter">
                    {remainingCharacters} {t('counter')} 
                </div>
            </div>
        </>
    );
}
export default CreateNote;