import styled from "styled-components";

const S = {}
    S.Layout = styled.div`
       display: flex;
       flex-direction: column;
    `;

    S.Content = styled.div`
        display:flex;
        justify-content: center;
    `;

    //header styles
    S.Header = styled.header`
        display: flex;
        flex-direction: row;
        width: 1440px;
    `;

    S.Logo = styled.div`
        display: flex;
        align-items: center;
        margin-right: 20px;
        
        & img {
            height: 40px;
        }
    `;

    S.MenuWrap = styled.div`
        display: flex;
        flex-direction: row;
        width: 865px;
    `;

    S.MainMenu = styled.ul`
        display: flex;
        flex-direction: row;
        width: 450px;
        & li {
            justify-content: gap-between;
            gap: 97px;
        }
    `;

    S.Language = styled.select`
        display: flex;
    `

    S.Contact = styled.button`
        width: 163px;
        height: 46px;
        font-size: 16px;
        weight: bold;
        border-radius: 50px;
    `;


    // footer style
    S.Footer = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
    `;

    S.BottomLogo = styled.div`
        & img{
            width: 50px;
        }
    `;

    S.FooterInfo = styled.div`
        & p{
            font-size: 9px;
        }
    `;
export default S;