import { CasesDetail } from "../../redux/covid/covidSlice";
import { useSelector } from "react-redux";
import Card from "../Card";
import { Styled } from "./DetailCards.styled";

const DetailCards = () => {
  const detail = useSelector(CasesDetail);

  return (
    <Styled>
      {detail.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </Styled>
  );
};

export default DetailCards;
