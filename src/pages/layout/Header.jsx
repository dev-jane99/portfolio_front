import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import S from "./style";

const Header = () => {
    // contact popup
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup);
    };

    // send sms
    const handleSendSMS = () => {
        window.location.href = "sms:+821099357301";
    };
    // send email 
    const handleSendEmail = () => {
        window.location.href = "mailto:dev.jane@gmail.com";
    };

    return (
        <S.Header>
            <S.Logo>
                <Link to={"/"}><img src={process.env.PUBLIC_URL + "/assets/logo_white.svg"} alt="logo" /></Link>
            </S.Logo>
            <S.MainMenu>
                <li><Link to={"/about"}>ABOUT</Link></li>
                <li><Link to={"/project"}>PROJECTS</Link></li>
                <li><Link to={"/study"}>STUDY ARCHIVES</Link></li>
            </S.MainMenu>
            <S.Contact onClick={handleShowPopup}>
                CONTACT ME!
            </S.Contact>
            
            {isOpenPopup && (
                <S.ContactPopup>
                <S.PopupClose onClick={handleShowPopup}>×</S.PopupClose>
                <S.PopupTitle>Contact Information</S.PopupTitle>
                <S.PopupContent>
                    <S.ContactItem onClick={handleSendSMS}>
                        <S.ContactIcon src={process.env.PUBLIC_URL + "/assets/phone.svg"} alt="phone" />
                        <S.ContactText>Mobile: (+82)010-9935-7301</S.ContactText>
                    </S.ContactItem>
                    <S.ContactItem onClick={handleSendEmail}>
                        <S.ContactIcon src={process.env.PUBLIC_URL + "/assets/message.svg"} alt="phone" />
                        <S.ContactText>Email: dev.jane@gmail.com</S.ContactText>
                    </S.ContactItem>
                    <S.ContactNote>Click to send SMS</S.ContactNote>
                </S.PopupContent>
            </S.ContactPopup>
            )}
        </S.Header>
    );
};

export default Header;