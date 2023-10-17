import { forwardRef } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
export var MyButton = forwardRef(function (props, ref) {
    return (<>
      {props.link && (<Link href={props.link}>
          <Button {...props} ref={ref}>
            {props.textValue}
          </Button>
        </Link>)}
      {props.scrollTo && (<ScrollLink to={props.scrollTo} spy={true} smooth={true} offset={-70} duration={500}>
          <Button {...props} ref={ref}>
            {props.textValue}
          </Button>
        </ScrollLink>)}
      {!props.scrollTo && !props.link && (<Button {...props} ref={ref}>
          {props.textValue}
        </Button>)}
    </>);
});
MyButton.displayName = "MyButton";
//# sourceMappingURL=MyButton.jsx.map