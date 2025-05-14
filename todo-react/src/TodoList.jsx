import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onRemove }) {
  if (todos.length === 0) {
    return <p>Nenhuma tarefa adicionada ainda.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
export default TodoList;
