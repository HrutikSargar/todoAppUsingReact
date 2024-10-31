export function CreateTodo() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "pink",
        borderRadius: 4,
        boxShadow: 0,
      }}
    >
      <input
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          borderColor: "white",
        }}
        type="text"
        placeholder="Enter Todo"
      />{" "}
      <br />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          borderColor: "white",
        }}
        type="text"
        placeholder="Enter Description"
      />{" "}
      <br />
      <br />
      <button
        onClick={calling}
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          borderColor: "white",
        }}
      >
        Add Todo
      </button>
    </div>
  );
  function calling() {
    console.log("calling function");
  }
}
