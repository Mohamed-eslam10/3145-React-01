import { useState } from "react";
import { Badge, Button } from "flowbite-react";

export default function Counter() {
  console.log("Counter Component Rendered");

  const [number, setNumber] = useState(10);

  //   const number = x[0];
  //   const myFunction = x[1];

  //   let number = 30;

  const increase = function () {
    console.log("Increase function called");

    console.log("number before increase: ", number);
    setNumber(number + 1);
    console.log("number after increase: ", number);
  };

  return (
    <div className="p-4 flex gap-6 items-center">
      <Button onClick={increase}>+</Button>
      <div className="flex flex-col gap-4">
        <Badge className="text-4xl">{number}</Badge>
        <Badge className="text-4xl">{number + 1}</Badge>
        <Badge className="text-4xl">{number - 1}</Badge>
        <Badge className="text-4xl">{number / 2}</Badge>
        <Badge className="text-4xl">{number * 2}</Badge>
        <Badge className="text-4xl">{number * 3}</Badge>
        <Badge className="text-4xl">{number % 2}</Badge>
        <Badge className="text-4xl">{number ** 2}</Badge>
      </div>
      <Button>-</Button>
    </div>
  );
}
