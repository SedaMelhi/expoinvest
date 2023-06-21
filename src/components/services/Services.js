import { useTranslation } from 'react-i18next';
import Title from '../title/Title.js';
import Service from './service/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './services.sass';

const Services = () => {
  const { t, i18n } = useTranslation();
  AOS.init();
  const servicesData = [
    {
      icon: './img/icon1.svg',
      title: t('services_one-title'),
      description: t('services_one-text'),
      id: 1,
    },
    {
      icon: './img/icon2.svg',
      title: t('services_two-title'),
      description: t('services_two-text'),
      id: 2,
    },
    {
      icon: './img/icon3.svg',
      title: t('services_three-title'),
      description: t('services_three-text'),
      id: 3,
    },
  ];
  return (
    <div className="services" id="services">
      <div className="wrap">
        <Title title={t('our_services')} />
        <div className="description2__wrap">{t('services_text')}</div>
        <div className="services__content">
          <div className="services__left">
            <img
              src="./img/sms1.png"
              alt=""
              className="sms sms_1"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            />
            <img
              src="./img/sms2.png"
              alt=""
              className="sms sms_2"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
            <img
              src="./img/sms3.png"
              alt=""
              className="sms sms_3"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
            <img
              src="./img/sms4.png"
              alt=""
              className="sms sms_4"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
            <div className="services__box"></div>
            <div className="services__img">
              <img src="./img/services.png" alt="" />
            </div>
          </div>
          <div className="services__right">
            {servicesData.map((item) => (
              <Service
                icon={item.icon}
                title={item.title}
                description={item.description}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
