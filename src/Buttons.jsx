export function Button(props) {
  const color = props.color ?? "pink";

  console.log("color", color);
  return (
    <button
      style={{
        color: color,
        fontSize: "30px",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        margin: "6px",
      }}
    >
      I am a button{" "}
    </button>
  );
}

export function ButtonGroup(props) {
  console.log("ButtonGroup props", props);
  const style = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexDirection: props.vertical ? "column" : "row",
  };

  return (
    <div style={props.style}>
      <button>Btn A</button>
      <button>Btn B</button>
    </div>
  );
}

export function ButtonWithIcon() {
  return <button>Save ✍</button>;
}
