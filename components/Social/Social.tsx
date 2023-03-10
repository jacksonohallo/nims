import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FadeInContainer } from "..";
import Styles from "./Styles";
import { Button } from "@mui/material";

const Social = () => {
  return (
    <Styles className="social">
      <div className="content">
        <div className="left">
          <FadeInContainer delay={1900}>
            <IconButton
              component="a"
              href="https://github.com/jacksonohallo/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </FadeInContainer>
          <FadeInContainer delay={2150}>
            <IconButton
              component="a"
              href="https://www.instagram.com//"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </FadeInContainer>
          <FadeInContainer delay={2300}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </FadeInContainer>
        </div>
        <div className="right">
          <FadeInContainer delay={1900}>
            <div className="email">
              <a
                href=" nimrodmadelakibet@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
                nimrodmadelakibet@gmail.com
              </a>
            </div>
          </FadeInContainer>
        </div>
      </div>
    </Styles>
  );
};

export default Social;
