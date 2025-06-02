import React, {useState} from 'react'
import S from "./style"

const Footer = () => {

  const [popupContent, setPopupContent] = useState(null);
  
  // SNS info 
  const snsData = [
    { id: 'linkedin', url: 'https://www.linkedin.com/in/jane-ryo', display: 'Jane Ryo' },
    // { id: 'notion', url: 'https://spice-geography-ce1.notion.site/1669b8638a5a80c18b8aefcf4745da35', display: 'notion portfolio' },
    { id: 'github', url: 'https://github.com/dev-jane99', display: 'https://github.com/dev-jane99' }
  ];
  
  const handleSnsClick = (sns) => {
    if (popupContent === sns.id) {
      setPopupContent(null); 
    } else {
      setPopupContent(sns.id); 
    }
  };

  const handlePopupClick = (url) => {
    window.open(url, '_blank');
  };


  return (
    <S.Footer>
      <S.Sns>
        {snsData.map((sns) => (
          <div key={sns.id} className="sns-item">
            <img 
              src={process.env.PUBLIC_URL + `/assets/${sns.id}.svg`} 
              alt={sns.id} 
              onClick={() => handleSnsClick(sns)}
            />
            {popupContent === sns.id && (
              <S.SnsPopup onClick={() => handlePopupClick(sns.url)}>
              <p>{sns.display}</p>
            </S.SnsPopup>
            )}
          </div>
        ))}
      </S.Sns>
      <S.BottomLogo>
        <img src={process.env.PUBLIC_URL + "/assets/logo_white.svg"} alt="logo" />
      </S.BottomLogo>
      <S.FooterInfo>
        <p>Portfolio purpose</p>
        <p>Update 2025.ver</p>
      </S.FooterInfo>
    </S.Footer>
  )
}

export default Footer