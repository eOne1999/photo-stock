import { TCard } from '../../types';

function Card(props: TCard) {
  const { card } = props;
  const imgSrc =
    card.url_z ||
    card.url_c ||
    card.url_n ||
    card.url_m ||
    card.url_sq ||
    card.url_t ||
    card.url_s ||
    card.url_q ||
    card.url_l ||
    card.url_o;

  const handleClick = () => {};

  return (
    <div
      className="cards__item card"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <img src={imgSrc} alt={card.title} className="card__img" />
      <div className="card__description">
        <p className="card__title">{card.title}</p>
        <a
          href={`https://www.flickr.com/people/${card.owner}`}
          target="_blank"
          className="card__author"
          rel="noreferrer"
        >
          By {card.ownername}
        </a>
      </div>
    </div>
  );
}

export default Card;
