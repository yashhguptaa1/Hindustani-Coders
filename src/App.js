import styled from 'styled-components';

const App = ()=> {
  return (
    <AppStyled>
      <h1>Styled Components</h1>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-color: red;
`;
  
export default App;
