import { Styled } from "./Card.styled";

const Card = ({ data }) => {
  const rewriteValue = () => {
    return data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const date = () => {
    return new Date(data.lastUpdate);
  };

  return (
    <Styled style={{ backgroundColor: data.color }}>
      <p>
        <strong>{data.id}</strong>
      </p>
      <p className="value">{rewriteValue()}</p>
      <p>Last Updated at :</p>
      <p className="date">{date().toDateString()}</p>
      <p className="date">{date().toLocaleTimeString()}</p>
      <div style={{ backgroundColor: data["color-2"] }}></div>
    </Styled>
  );
};

export default Card;
