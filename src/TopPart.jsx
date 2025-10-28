import { Button, ButtonWithIcon } from "./Buttons"

export default function TopPart() {
    return (
        <header className="bg-gradient-to-t from-red-500 to-red-900">
            <h1 className="p-8 border">My App Title</h1>
            <Button></Button>
            <ButtonWithIcon></ButtonWithIcon>
            <Button></Button>
            <Button></Button>
            <ButtonWithIcon></ButtonWithIcon>
        </header>
    )
}

