import React from "react";
import ReactHtmlParser from "react-html-parser";

interface DocumentProps {
	appHtml: string;
	styles: string;
}

export default function Document({appHtml, styles}: DocumentProps) {
	return (
		<html>
			<head>
				<title>Bootstrap-react app</title>
			</head>
			<body>
				{ReactHtmlParser(styles)}
				<div id="app" dangerouslySetInnerHTML={{__html: appHtml}} />
				<script src="/dist/client.js" />
			</body>
		</html>
	);
}
