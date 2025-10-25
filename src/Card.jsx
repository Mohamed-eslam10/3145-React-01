export default function Card(props) {

    console.log(props)

    return (
        <div>
            <div>
                <h3>{props.header}</h3>
            </div>
            <div>
                {props.children}
            </div>
            <div>Card Footer</div>
        </div>
    )
}