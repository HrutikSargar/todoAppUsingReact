export function CreateTodo() {
  return (
    <div
      style={{ textAlign: "center", marginTop: 100, backgroundColor: "pink" }}
    >
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Enter Todo"
      />{" "}
      <br />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Enter Description"
      />{" "}
      <br />
      <br />
      <button style={{ padding: 10, margin: 10 }}>Add Todo</button>
    </div>
  );
}
