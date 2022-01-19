import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import styled from 'styled-components';
import { Button } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 10,
    neutral: 20,
    bad: 30,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}
