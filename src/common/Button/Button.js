import React from "react";
import classNames from "classnames";
import Link from "../Link/Link";
import "./Button.scss";

const Button = ({
  customClass,
  name,
  link,
  variant,
  onClick,
  id,
  tabIndex,
}) => {
  const buttonClasses = classNames("button", customClass, {
    [`button--${variant}`]: variant,
  });

  const renderButton = link ? (
    <Link customClass={buttonClasses} link={link} alt={name} tabIndex>
      {name}
    </Link>
  ) : (
    <button
      id={id}
      onClick={onClick}
      className={buttonClasses}
      tabIndex={tabIndex && -1}
    >
      {name}
    </button>
  );
  return renderButton;
};

export default Button;
