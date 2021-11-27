import React from "react";
import classNames from "classnames";
import "./Container.scss";

const Container = ({ customClass, children, variant, arriaHidden, role }) => {
  const Components = variant ? "section" : "div";
  const containerClasses = classNames(customClass, {
    [`container--section`]: variant,
  });

  return (
    <Components
      className={containerClasses}
      aria-hidden={arriaHidden}
      role={role}
    >
      {children}
    </Components>
  );
};

export default Container;
