export default function Alert(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <p>{props.msg}</p>
        </div>
    )
}