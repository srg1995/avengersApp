import React from "react";

import {
  Card,
  CardGroup,
  CardImageSketelon,
  Divider,
  Name,
} from "./CardsInfoSkeletonStyle";
import { MiniHeartWhiteIcon } from "../../assets/icons";

export default function CardsInfoSkeleton() {
  const cardData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "",
  }));
  console.log(cardData);

  return (
    <CardGroup>
      {cardData?.map(({ id, name }) => {
        return (
        <Card key={id}>
          <CardImageSketelon />
          <Divider />
          <Name>
            <span>{name}</span>
            <button>{<MiniHeartWhiteIcon />}</button>
          </Name>
        </Card>)
      })}
    </CardGroup>
  );
}
