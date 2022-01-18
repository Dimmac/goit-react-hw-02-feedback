import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import styled from 'styled-components';
import { Button } from './Feedback.styled';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class Feedback extends Component {
  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <div>
          <button
            type="button"
            onClick={() => {
              console.log('Увеличить');
            }}
          >
            Good
          </button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h3>Statistics</h3>
        <div>
          <p>Good: 3</p>
          <p>Neutral: 3</p>
          <p>Bad: 3</p>
        </div>
      </div>
    );
  }
}
