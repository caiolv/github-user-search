import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  margin: 0 auto 0;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  & > span {
    font-size: 15px;
    color: #666;
  }

  button {
    transition: opacity 0.25s ease-out;
    display: flex;
    align-items: center;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    background: #fff;

    span {
      color: #7d40e7;
      margin: 0 5px;
      font-weight: bold;
    }

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
