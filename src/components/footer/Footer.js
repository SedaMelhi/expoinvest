import { useTranslation } from 'react-i18next';
import './footer.sass';

const Footer = () => {
  const { t, i18n } = useTranslation();
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
              className="networks__item">
              <img src="./img/inst.svg" alt="" />
            </a>

            <a href="https://t.me/eden_wise" target="_blank" className="networks__item">
              <img src="./img/telegram.svg" alt="" />
            </a>

            <div className="networks__item">
              <img src="./img/ln.svg" alt="" />
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__title">{t('landing')}</div>
            <div className="footer__link">
              <a href="#">{t('services')}</a>
            </div>
            <div className="footer__link">
              <a href="#">{t('deals')}</a>
            </div>
            <div className="footer__link">
              <a href="#">{t('chat')}</a>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__title">{t('terms')}</div>
            <div className="footer__link">
              <a href="#">{t('policy')}</a>
            </div>
            <div className="footer__link">
              <a href="#">{t('terms-of-use')}</a>
            </div>
          </div>
          <div className="footer__item">
            <div className="footer__title">{t('contacts')}</div>
            <div className="footer__link">
              <a href="mailto:info@expovision.io">info@expovision.io</a>
            </div>
            <div className="footer__link">
              <a href="tel:+17479447347">+1 747 944 7347</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
