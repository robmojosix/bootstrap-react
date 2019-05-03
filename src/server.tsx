import {NextFunction, Request, Response} from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "./component/App";
import Document from "./Document";
import {ServerStyleSheet} from "styled-components";

export default function(req: Request, res: Response, next: NextFunction) {
	if (req.path !== "/") {
		return next();
	}

	const sheet = new ServerStyleSheet();
	const appHtml = renderToString(sheet.collectStyles(<App />));
	const styles = sheet.getStyleTags();
	const document = renderToString(<Document appHtml={appHtml} styles={styles} />);
	res.status(200).send(document);
}
