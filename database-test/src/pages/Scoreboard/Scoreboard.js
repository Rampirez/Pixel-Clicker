import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Scoreboard extends Component {
  // Setting our component's initial state
  state = {
   scoreTable: [],
   userName: "",
   highScore: ""
  };

  // When the component mounts, load all scores and save them to this.state.highScore
  componentDidMount() {
    this.loadScores();
  }

  // Loads all scores and sets them to this.state.highScore
  loadScores = () => {
    API.getScores()
      .then(res =>
        this.setState({ scoreTable: res.data, userName: "", highScore: "" })
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.highScore) {
      API.saveBook({
        userName: this.state.userName,
        highScore: this.state.highScore
      })
        .then(res => this.loadScores())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>High Scores</h1>
            </Jumbotron>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>List</h1>
            </Jumbotron>
            {this.state.scoreTable.length ? (
              <List>
                {this.state.scoreTable.map(score => {
                  return (
                    <ListItem key={score._id}>
                      <a href={"/books/" + score._id}>
                        <strong>
                          {score.userName} - {score.highScore}
                        </strong>
                      </a>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Scoreboard;
