import React from "react";
import { RouteComponentProps } from "react-router-dom";

type NotFoundParams = RouteComponentProps;

export default function NotFound({ staticContext = {} }: NotFoundParams) {
  staticContext.status = 404;
  return <div>Oooopppss!!!</div>;
}
