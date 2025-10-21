export function SimpleButton() {
    return (
        <div className="text-end">
            <button className="btn btn-secondary me-1">ok</button>
            <button className="btn btn-danger">cancel</button>
        </div>
    )
}

export function SubButton() {
    return (
        <button className="btn btn-success btn-sm ms-1">Submit</button>
    )
}
