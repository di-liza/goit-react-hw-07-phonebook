import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .phoneBookTitle {
    font-size: 26px;
    font-weight: 500;
    line-height: 42px;
    position: absolute;
    text-align: center;
    top: 10px;
    color: #fff;
    left: 10px;
  }

  .contactsWrapper {
    right: 0;
    display: flex;
    position: absolute;
    top: -20px;
    height: 100%;
    overflow-y: scroll;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    width: 200px;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;
    height: 100%;
    width: 800px;
    background-color: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 150px;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    border: none;
    bottom: 0;
    overflow-x: hidden;
  }

  .form-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;

    width: 200px;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;

    height: 520px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);

    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;

    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;

    margin-right: 700px;
    margin-top: 200px;
  }

  .title {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
`;
