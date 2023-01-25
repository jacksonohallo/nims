import MUIButton from "@mui/material/Button";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import { Button } from "../";
import Styles from "./Styles";

const Menu = () => {
  return (
    <Styles className="menu">
      <ul>
        <li>
          <FadeInContainer delay={350}>
            <MUIButton color="primary" component="a" href="/#about">
              About
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={500}>
            <MUIButton component="a" href="https://client-delta-tan.vercel.app/" target="_blank">
              Geoinformatics
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={800}>
            <MUIButton component="a" href="/#contact">
              Contact
            </MUIButton>
          </FadeInContainer>
        </li>

        <li>
          <FadeInContainer delay={950}>
            <Button
              size="medium"
              href="/assets/nimrod.pdf"
              target="_blank"
            >
              Resume
            </Button>
          </FadeInContainer>
        </li>
      </ul>
    </Styles>
  );
};

export default Menu;
