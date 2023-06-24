import { useTranslation } from 'react-i18next';
import './steps.sass';
import Title from '../title/Title';

const Steps = () => {
  const { t } = useTranslation();
  const steps = [
    { title: t('step1__title'), desc: t('step1__desc') },
    { title: t('step2__title'), desc: t('step2__desc') },
    { title: t('step3__title'), desc: t('step3__desc') },
    { title: t('step4__title'), desc: t('step4__desc') },
  ];
  return (
    <div className="steps" id="deals">
      <div className="wrap">
        <div className="steps__title">
          <Title title={t('steps_title')} />
        </div>
        <div className="steps__items">
          {steps.map((step, i) => (
            <div className="steps__item" key={i}>
              <div className="steps__circle">{i + 1}</div>
              <div className="steps__text">
                <div className="steps__subtitle">{step.title}</div>
                <div className="steps__desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
