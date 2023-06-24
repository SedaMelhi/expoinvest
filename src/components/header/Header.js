import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Description from '../description/Description';
import './header.sass';

const Header = () => {
  const { t } = useTranslation();
  const [imgState, setImgState] = useState(false);
  return (
    <header className={imgState ? 'animation' : ''} alt="" onLoad={() => setImgState(true)}>
      <div className="wrap">
        <div className="header">
          <div className="description__wrap">
            <Description title={{ span: 'Expo', text: 'invest' }} />
          </div>
          <div className="header__subtitle">{t('header_subtitle')}</div>
          <div className="header__desc">{t('header_desc')}</div>
          <div className="buttons">
            <Link to="/" className="button button_blue">
              {t('header_btn')}
            </Link>
            <Link to="/" className="button">
              {t('log_in')}
            </Link>
          </div>
          <div className="circle circle_blue">
            <img src="./img/plane.svg" alt="" />
          </div>

          <div className="circle circle_green">
            <img src="./img/money.svg" alt="" />
          </div>
          <div className="circle circle_yellow">
            <img src="./img/hands.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
