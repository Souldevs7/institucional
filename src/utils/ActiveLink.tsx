//@ts-nocheck
import React from "react";
import Link from "next/link";

type ActiveLinkProps = {
  to?: any;
  activeClassName: string;
};

const ActiveLink: React.FC<ActiveLinkProps & React.ComponentProps<Link>> = ({
  to,
  children,
  activeClassName,
  ...props
}) => {
  return <Link {...props}>{children}</Link>;
};

export default ActiveLink;
