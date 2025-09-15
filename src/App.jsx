import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase"; // Import the Firestore database instance
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(""); // State for the new to-do item

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // Get a reference to the 'todos' collection
        const querySnapshot = await getDocs(collection(db, "todos"));
        const todosArray = [];
        querySnapshot.forEach((doc) => {
          todosArray.push({ id: doc.id, ...doc.data() });
        });
        setTodos(todosArray);
      } catch (error) {
        console.error("Error fetching todos: ", error);
      }
    };
    fetchTodos();
  }, []);

  // Function to add a new to-do
  const addTodo = async (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    if (newTodo.trim() === "") return; // Don't add empty todos

    try {
      // Add the new document to the "todos" collection
      const docRef = await addDoc(collection(db, "todos"), {
        text: newTodo,
        completed: false,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);

      // Update the local state to show the new item immediately
      setTodos([...todos, { id: docRef.id, text: newTodo, completed: false }]);
      setNewTodo(""); // Clear the input field
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // ➡️ Add the deleteTodo function
  const deleteTodo = async (id) => {
    try {
      // Create a reference to the document using its ID
      const todoRef = doc(db, "todos", id);
      // Delete the document
      await deleteDoc(todoRef);
      // Update the local state to remove the item from the list
      setTodos(todos.filter((todo) => todo.id !== id));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const todoRef = doc(db, "todos", id);
      // Update the 'completed' field in Firestore
      await updateDoc(todoRef, {
        completed: !completed,
      });

      // Update the local state to reflect the change immediately
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      );
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-sky-100">
        <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
        <div className="mb-4 bg-white p-4 rounded-md shadow md:w-[50vw]">
          <form
            onSubmit={addTodo}
            className="p-2 flex flex-col items-center space-x-2 gap-3"
          >
            <input
              className="border border-gray-300 p-1 rounded-md w-full text-black focus:outline-none"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new to-do"
            />
            <button
              className="py-2 px-4 rounded-lg bg-sky-500 text-white font-bold hover:bg-sky-600"
              type="submit"
            >
              Add To-Do
            </button>
          </form>
        </div>
        <div>
          <h2>My To-Do List</h2>
          <ul className="bg-white p-4 rounded-md shadow md:w-[50vw]">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <li
                  className="flex justify-between items-center mb-2 border-b border-gray-300 py-2"
                  key={todo.id}
                >
                  <input
                    className="w-5 h-5 rounded-lg"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id, todo.completed)}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="py-2 px-4 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <li>No to-do items found.</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
