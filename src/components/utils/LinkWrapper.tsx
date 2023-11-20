
//@ts-nocheck
import React from "react";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function LinkWrapper({ props, children }) {
  const { scrollTo, link, isDisabled } = props;

  if ((!scrollTo && !link) || isDisabled) {
    return <>{children}</>;
  } else if (!!link) {
    return (
      <Link href={link} style={{ textDecoration: "none" }}>
        {children}
      </Link>
    );
  } else if (!!scrollTo) {
    return (
      <ScrollLink
        to={scrollTo}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {children}
      </ScrollLink>
    );
  }
}
