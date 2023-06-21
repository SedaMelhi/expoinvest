import './description.sass';

const Description = ({ title }) => {
  return (
    <div className="description">
      <div className="description__title">
        {title.span ? <span>{title.span}</span> : ''}
        {title.text}
      </div>
    </div>
  );
};

export default Description;
