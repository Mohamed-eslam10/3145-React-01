import { Button, ButtonGroup } from "./Buttons";

export default function TopPart() {
  return (
    <header>
      <h1 style={{ color: "red" }} >My App Title</h1>
      <Button color="green" />
      <Button color="red" />
      <Button />

      <ButtonGroup />
      <ButtonGroup vertical style={{ border: "6px solid red" }} class='p-4' />
    </header>
  );
}
