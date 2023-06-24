import News from '../chat/News';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Services from '../services/Services';
import Steps from '../steps/Steps';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation();
  const menu = {
    services: t('investor'),
    deals: t('companies'),
    chat: t('educational'),
    faq: t('accelerator'),
  };
  return (
    <div>
      <Nav items={menu} path="/#" />
      <Header />
      <Services />
      <Steps />
      <News />
      <Faq />
      <Footer />
    </div>
  );
};

export default Content;
