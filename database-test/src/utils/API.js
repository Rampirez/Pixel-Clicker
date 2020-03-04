import axios from "axios";

export default {
  // Gets all books
  getScores: function() {
    return axios.get("/api/highscores");
  },
  // Gets the book with the given id
  getUsers: function(id) {
    return axios.get("/api/highscores" + id);
  },
  // Saves a book to the database
  saveScores: function(scoreData) {
    return axios.post("/api/highscores", scoreData);
  }
};