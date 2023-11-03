import styled from "styled-components";
import Card from "../components/Card";
import { BestList, CoffeeList, ShakeList, BubbleteaList } from "../DrinkList";

interface DrinkProps {
  type: "best" | "coffee" | "shake" | "bubbletea";
}

// 음료 타입에 따른 음료 리스트 반환
const Drinks = ({ type }: DrinkProps) => {
  let drinkList;

  switch (type) {
    case "best":
      drinkList = BestList;
      break;
    case "coffee":
      drinkList = CoffeeList;
      break;
    case "shake":
      drinkList = ShakeList;
      break;
    case "bubbletea":
      drinkList = BubbleteaList;
      break;
    default:
      break;
  }

  return (
    <Container>
      {drinkList?.map((drink, idx) => (
        <Card id={idx} name={drink.name} price={drink.price} img={drink.img} />
      ))}
    </Container>
  );
};

export default Drinks;

const Container = styled.div``;
