import CuteStar from "../assets/images/cute_star.png";
import Panda from "../assets/images/pandabear.png";

function Star({ isFilled, handleClick }) {
  let starIcon = isFilled ? CuteStar : Panda;
  return (
    <img
      src={starIcon}
      className="card--favorite"
      onClick={handleClick}
      alt="favorite"
    />
  );
}

export default Star;
