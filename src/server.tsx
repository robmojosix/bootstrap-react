import { NextFunction, Request, Response } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "./component/Routes";
import Document from "./Document";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom";

export default function(req: Request, res: Response, next: NextFunction) {
  // all routes now handled by react router
  // if (req.path !== "/") {
  //   return next();
  // }

  const context = {};

  const ServerRenderedApp = () => (
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );

  const sheet = new ServerStyleSheet();
  const appHtml = renderToString(sheet.collectStyles(<ServerRenderedApp />));
  const styles = sheet.getStyleTags();
  const document = renderToString(
    <Document appHtml={appHtml} styles={styles} />
  );
  res.status(200).send(document);
}
