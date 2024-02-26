export async function fetchTodos() {
  try {
    const response = await fetch("http://localhost:4000/todos");
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
}

export async function fetchTodo(id) {
  try {
    const response = await fetch(`/api/todos/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
}

export async function createTodo(todo) {
  console.log("in the fetch function", todo);
  try {
    const response = await fetch("http://localhost:4000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error("Failed to create todo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    return null;
  }
}

export async function updateTodo(id, todo) {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating todo:", error);
    return null;
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(`/http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
    return true;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return false;
  }
}
