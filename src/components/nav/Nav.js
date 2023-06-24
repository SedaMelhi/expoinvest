import Lang from './lang/Lang';
import Menu from './menu/Menu';
import { useTranslation } from 'react-i18next';
import './nav.sass';
import { Link } from 'react-router-dom';

const Nav = ({ items, path }) => {
  const { t } = useTranslation();
  return (
    <nav>
      <div className="wrap">
        <div className="nav">
          <div className="nav__start">
            <Link to="/" className="logo">
              <img src="img/full-logo.svg" alt="expovision" className="logo" />
            </Link>
            <Menu items={items} path={path} />
          </div>
          <div className="nav__end">
            <Link to="/" className="button button_nav">
              {t('log_in')}
            </Link>
            <Lang />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
