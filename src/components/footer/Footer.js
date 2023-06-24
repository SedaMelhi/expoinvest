import { useTranslation } from 'react-i18next';
import './footer.sass';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="wrap">
        <div className="footer">
          <a href="./index.html" className="footer__item">
            <img src="./img/full-logo.svg" alt="" className="footer__logo" />
          </a>
          <div className="networks footer__item">
            <a
              href="https://www.instagram.com/edenwise.io/"
              target="_blank"
              rel="noreferrer"
              className="networks__item">
              <img src="./img/inst.svg" alt="" />
            </a>

            <a
              href="https://t.me/eden_wise"
              rel="noreferrer"
              target="_blank"
              className="networks__item">
              <img src="./img/telegram.svg" alt="" />
            </a>

            <div className="networks__item">
              <img src="./img/ln.svg" alt="" />
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__title">{t('landing')}</div>
            <div className="footer__link">
              <Link to="/">{t('services')}</Link>
            </div>
            <div className="footer__link">
              <Link to="/">{t('deals')}</Link>
            </div>
            <div className="footer__link">
              <Link to="/">{t('chat')}</Link>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__title">{t('terms')}</div>
            <div className="footer__link">
              <Link to="/">{t('policy')}</Link>
            </div>
            <div className="footer__link">
              <Link to="/">{t('terms-of-use')}</Link>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__title">{t('contacts')}</div>
            <div className="footer__link">
              <a href="mailto:info@expovision.io">info@expovision.io</a>
            </div>
            <div className="footer__link">
              <a href="tel:+17479447347">+7 (929) 4444 095</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
