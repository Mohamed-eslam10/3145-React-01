export function Button() {
    return (
        <button className="btn">I am a button</button>
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
           Save <span className="inline-block animate-wiggle">✍</span>
        </button>
    )
}
