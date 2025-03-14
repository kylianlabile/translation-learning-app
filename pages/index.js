import { useState, useEffect } from "react";
import { getExercises, createExercise } from "../utils/api";

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: "",
    german_text: "",
    english_text: "",
  });

  useEffect(() => {
    async function fetchExercises() {
      const res = await getExercises();
      setExercises(res.data.exercises);
    }
    fetchExercises();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExercise(newExercise);
    setNewExercise({
      name: "",
      german_text: "",
      english_text: "",
    });
  };

  return (
    <div>
      <h1>Translation Learning</h1>
      <h2>Exercises</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise}>{exercise}</li>
        ))}
      </ul>
      <h2>Create New Exercise</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise Name"
          value={newExercise.name}
          onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
        />
        <textarea
          placeholder="German Text"
          value={newExercise.german_text}
          onChange={(e) => setNewExercise({ ...newExercise, german_text: e.target.value })}
        />
        <textarea
          placeholder="English Text"
          value={newExercise.english_text}
          onChange={(e) => setNewExercise({ ...newExercise, english_text: e.target.value })}
        />
        <button type="submit">Create Exercise</button>
      </form>
    </div>
  );
}
