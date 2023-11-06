import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  color: #f2f2f2;
  --webkit-font-smoothing: antialiased;
`;

export const Header = styled.header`
  width: 100%;
  background: #0d0d0d;
  padding: 5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  padding-top: 3rem;
  width: 780px;
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

export const FormUser = styled.section`
  display: flex;
  margin-top: -4.5rem;
  margin-bottom: 4rem;
  gap: 1rem;

  input {
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
    background: #262626;
    border: none;
    outline: none;
    color: #d9d9d9;
    line-height: 1.6;
    border-radius: 8px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem 1.25rem;
  background: #1e6f9f;
  border: none;
  border-radius: 8px;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  transition: background-color 0.1s;
`;
