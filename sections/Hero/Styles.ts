import styled from "styled-components";
import { colors, fonts, Section, media } from "../../style";

const Styles = styled(Section)`
  padding: 3rem 0 0;
  min-height: calc(100vh - 4rem);
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .MuiContainer-root {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;

    h1,
    h2 {
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1;
    }

    h1 {
      background: linear-gradient(
        94.23deg,
        ${colors.green} 12.41%,
        ${colors.blue} 52.55%,
        ${colors.blue} 89.95%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      margin-bottom: 1.875rem;
    }

    h3 {
      font-size: 1.125rem;
      line-height: 1;
      font-weight: 300;
      font-family: ${fonts.mono};
      color: ${colors.green};
    }


    .earth {
      width: 300px;
      height: 300px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 0 20px 20px #000 inset, 0 0 20px 2px #000;
    }
    
    .earth:after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: -20px -20px 50px 2px #000 inset;
      border-radius: 50%;
    }
    
    .earth > div {
      width: 200%;
      height: 100%;
      animation: spin 30s linear alternate infinite;
      background: url(https://web.opendrive.com/api/v1/download/file.json/NTlfMTQ1MTkzNDhf?inline=1);
      /*orginal image at https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Earthmap1000x500compac.jpg/640px-Earthmap1000x500compac.jpg */
      background-size: cover;
    }
    @keyframes spin {
      to {
        transform: translateX(-50%);
      }
    }
    
    h4 {
      max-width: 25rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;

      a {
        color: ${colors.green};
      }
    }
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      -webkit-transform: translateY(0.438rem);
      transform: translateY(0.438rem);
    }
  }

  .scroll-to-icon {
    align-self: center;
    width: 1.25rem;
    height: 1.875rem;
    box-shadow: inset 0 0 0 0.125rem ${colors.slate};
    border-radius: 1.563rem;
    position: relative;
    margin-top: 10rem;
    margin-bottom: 2rem;

    &::after {
      content: "";
      width: 0.25rem;
      height: 0.375rem;
      background: ${colors.slate};
      margin-left: 0.5rem;
      top: 0.5rem;
      border-radius: 0.125rem;
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-name: scroll;
      animation-name: scroll;
      position: absolute;
      transition: all 0.25s ease-in-out;
    }

    &:hover {
      box-shadow: inset 0 0 0 0.125rem ${colors.green};
      &::after {
        background: ${colors.green};
      }
    }
  }
`;

export default Styles;
