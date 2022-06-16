import React, { useState } from 'react';
import './styles.css';

const Form = () => {
    const [text, setText] = useState("");
    const [textDirty, setTextDirty] = useState(false);
    const [textInfo, setTextInfo] = useState("Поле ввода не должно быть пустым");
    const [isStyle, setIsStyle] = useState('isError');
    const [isInputStyle, setIsInputStyle] = useState('text')

    const setTextHandler = (e) => {
        setText(e.target.value);
        focusHandler();
    }

    const blurHandler = (e) => {
        if(e.target.value.length === 0){
            setTextDirty(true);
            setIsStyle('isError');
            setTextInfo("Поле ввода не должно быть пустым");
            setIsInputStyle('text textError');
        }
        else {
            setTextDirty(false);
        }
    }

    const sendHandler = (e) => {
        if(text.length !== 0) {
            setTextInfo("Сообщение успешно отправлено")
            setIsStyle('isSuccessfully')
            setIsInputStyle('text');
            setTextDirty(true);
            setText("");
        }
    }

    const focusHandler = () => {
        setTextDirty(false);
        setIsInputStyle('text');
    }

    return (
        <div className='main'>
            <div className='form' >
                <input 
                    className={isInputStyle}
                    type="text"
                    value={text}
                    onChange={setTextHandler}
                    onBlur={blurHandler}
                />
                <input 
                    className='submit' 
                    type="submit"
                    onClick={sendHandler}
                />
            </div>
            {(textDirty && textInfo) && <div className={isStyle}>{textInfo}</div>}
        </div>
    );
};

export default Form;