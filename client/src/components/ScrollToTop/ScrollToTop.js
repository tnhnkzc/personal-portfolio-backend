import React, { useEffect, useState } from "react";
import { Container, Button } from "@mui/material";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    const currentPageY = window.scrollY;
    if (currentPageY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  });

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <Container
      style={{
        transitionTimingFunction: "ease-in",
        transition: "1.2s",
        animationDelay: "1.2s",
      }}
    >
      <Button
        style={{
          float: "right",
          color: "#ffcc00",
        }}
      >
        <ArrowUpwardRoundedIcon onClick={scrollToTop} />
      </Button>
    </Container>
  ) : null;
}

export default ScrollToTop;
