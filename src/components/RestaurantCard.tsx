import "./RestaurantCard.css";

interface Props {
  image?: string;
  description?: string;
  title: string;
  address: string;
  rating: number;
}

const RestaurantCard = ({ description, title, address }: Props) => {
  return (
    <div className="card">
      <div className="card-info">
        <div className="card-description">
          <h3 className="title">{title}</h3>
          <p className="address">{address}</p>
          <p className="summary">{description}</p>
        </div>
        <div className="card-image"></div>
        <div className="bussin-meter">
          <p className="message">BUSSINMETER</p>
          <div className="segment"></div>
          <div className="segment"></div>
          <div className="segment"></div>
          <div className="segment"></div>
          <div className="segment"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
