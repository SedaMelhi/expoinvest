import { useTranslation } from 'react-i18next';
import './news.sass';
import Title from '../title/Title';

const News = () => {
  const { t } = useTranslation();
  const date = [
    {
      img: './img/img1.png',
      date: '13/05/2023',
      theme: t('news1_theme'),
      subtitle: t('news1_subtitle'),
      desc: t('news1_desc'),
    },
    {
      img: './img/img2.png',
      date: '13/05/2023',
      theme: t('news2_theme'),
      subtitle: t('news2_subtitle'),
      desc: t('news2_desc'),
    },
    {
      img: './img/img3.png',
      date: '13/05/2023',
      theme: t('news3_theme'),
      subtitle: t('news3_subtitle'),
      desc: t('news3_desc'),
    },
  ];
  return (
    <div className="news" id="chat">
      <div className="wrap">
        <Title title={t('news_title')} />
        <div className="news__items">
          {date.map(({ img, date, theme, subtitle, desc }, i) => (
            <div className="news__item" key={i}>
              <div className="news__image">
                <img src={img} alt="" />
              </div>
              <div className="news__details">
                <div className="news__date">{date}</div>
                <div className="news__theme">{theme}</div>
              </div>
              <div className="news__subtitle">{subtitle}</div>
              <div className="news__desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
