import axios from "axios";

const API_BASE_URL = "https://your-fastapi-backend-url.onrender.com"; // Replace with your Render backend URL

export const createExercise = async (exercise) => {
  return await axios.post(`${API_BASE_URL}/create_exercise/`, exercise);
};

export const getExercises = async () => {
  return await axios.get(`${API_BASE_URL}/list_exercises/`);
};

export const getExercise = async (name) => {
  return await axios.get(`${API_BASE_URL}/get_exercise/${name}`);
};

export const checkTranslation = async (data) => {
  return await axios.post(`${API_BASE_URL}/check_translation/`, data);
};
