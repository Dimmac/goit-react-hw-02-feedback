import './App.css';
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Feedback } from '../Feedback/Feedback.jsx';
import { Container } from './App.styled';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Feedback />
    </Container>
  );
}

export default App;
