import { useState } from "react";
import { Badge, Button } from "flowbite-react";

export default function Counter2() {
  console.log("Counter Component Rendered");

  const [number, setNumber] = useState(10);

  const nums = [10, 20, 30, 40];

  const updateNumber = function (num) {
    console.log("updateNumber function fired with num =", num);
    setNumber(number + num);
  };

  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      <h2 className="text-center py-3 font-black text-2xl">Counter 2 Page</h2>

      <div className="flex gap-4 items-center">
        <Button
          onClick={() => updateNumber(1)}
          className="bg-green-600 text-white"
          color="trasparent"
        >
          +1
        </Button>
        <Button
          onClick={() => updateNumber(-1)}
          className="bg-red-600 text-white"
          color="trasparent"
        >
          -1
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        {nums.map((num) => (
          <Button
            onClick={() => updateNumber(num)}
            className="bg-green-600 text-white"
            color="trasparent"
          >
            + {num}
          </Button>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <Button
          onClick={() => updateNumber(-10)}
          className="bg-red-600 text-white"
          color="trasparent"
        >
          - 10
        </Button>
        <Button
          onClick={() => updateNumber(-20)}
          className="bg-red-600 text-white"
          color="trasparent"
        >
          - 20
        </Button>
        <Button
          onClick={() => updateNumber(-30)}
          className="bg-red-600 text-white"
          color="trasparent"
        >
          - 30
        </Button>
        <Button
          onClick={() => updateNumber(-40)}
          className="bg-red-600 text-white"
          color="trasparent"
        >
          - 40
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <Badge className="text-4xl">{number}</Badge>
        {/* <Badge className="text-4xl">{number + 1}</Badge>
        <Badge className="text-4xl">{number - 1}</Badge>
        <Badge className="text-4xl">{number / 2}</Badge>
        <Badge className="text-4xl">{number * 2}</Badge>
        <Badge className="text-4xl">{number * 3}</Badge>
        <Badge className="text-4xl">{number % 2}</Badge>
        <Badge className="text-4xl">{number ** 2}</Badge> */}
      </div>
    </div>
  );
}
