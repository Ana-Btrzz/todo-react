import { useState } from "react";

function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa"
        style={{ padding: "8px", width: "200px", marginRight: "8px" }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
