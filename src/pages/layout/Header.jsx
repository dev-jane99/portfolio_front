import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import S from "./style";
// import LanguageSwitcher from '../../components/LanguageSwitcher';

const Header = () => {


    // contact popup
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const handleShowPopup = () => {
        setIsOpenPopup(!isOpenPopup);
    };

    return (
        <S.Header>
            <S.Logo>
                <Link to={"/"}><img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="logo" /></Link>
            </S.Logo>
            <S.MenuWrap>
                <S.MainMenu>
                    <li><Link to={"/about"}>ABOUT</Link></li>
                    <li><Link to={"/portfolio"}>PORTFOLIO</Link></li>
                    <li><Link to={"/about"}>STUDY ARCHIVES</Link></li>
                </S.MainMenu>
                <S.Language>
                    {/* <option value={ko}>KO</option>
                    /
                    <option value={en}>EN</option> */}
                    {/* <LanguageSwitcher /> */}
                </S.Language>
                <S.Contact onClick={handleShowPopup}>
                    CONTACT ME!
                </S.Contact>
            </S.MenuWrap>
        </S.Header>
    );
};

export default Header;