export function Button(props) {
    // console.log(props);
    // console.log(props.text);
    // console.log(props['text']);

    return (
        <button>{props.text}</button>
    )
}

export function ButtonGroup() {
    return (
        <div>
            <button>Btn A</button>
            <button>Btn B</button>
        </div>
    )
}

export function ButtonWithIcon() {
    return (
        <button>
            Save ✍
        </button>
    )
}


