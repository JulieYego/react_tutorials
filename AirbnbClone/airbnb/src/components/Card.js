import Star from "../assets/images/cute_star.png";
import "../assets/styles/styles.css";

function Card({ item, img, stats, location, title, price, openspots }) {
  let badgeText;
  if (openspots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../assets/images/${img}`} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
