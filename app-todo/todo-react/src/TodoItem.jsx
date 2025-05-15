function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        margin: "8px 0",
        textDecoration: todo.completed ? "line-throug" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ margin: "8px" }}
      />
      <span style={{ flex: "1" }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)} style={{ marginLeft: "8px" }}>
        Remover
      </button>
    </li>
  );
}

export default TodoItem;
