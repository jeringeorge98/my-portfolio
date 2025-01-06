import React from "react";
import { Link } from "gatsby";

import Container from "../Container";
import Button from "../Button";
import TitleSection from "../TitleSection";

import * as Styled from "./styles";

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({
  title,
  subtitle,
  content,
  linkTo,
  linkText,
}) => (
  <Styled.Banner>
    <Container section>
      <div>
        <TitleSection title={title} subtitle={subtitle} />
        <Styled.Content>{content}</Styled.Content>
      </div>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
