import styled from "styled-components";
import { secondaryColor, tertiaryColor } from "../UI/variables";

export const SearchBarContainer = styled.div`
  .busca {
    display: flex;

    form {
      display: flex;
      margin-left: auto;
      position: relative;

      input {
        background-color: ${secondaryColor};
        border: none;
        border-bottom: 1px solid #888;
        font-size: 16px;
        padding: 5px 10px;
        width: 200px;

        &:focus {
          outline: none;
          border-bottom-color: ${tertiaryColor};
        }
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-left: 10px;
        padding: 0;

        img {
          max-height: 24px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    input {
      display: none;
    }

    button {
      text-align: end;
    }
  }

`;