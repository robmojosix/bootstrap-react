import "babel-polyfill";
import React from "react";
import ReactDOM, {Renderer} from "react-dom";
import App from "./App";

type AppType = typeof App;

function render(renderFunction: Renderer, App: AppType) {
	const element = document.getElementById("app");
	const app = <App />;
	renderFunction(app, element);
}

render(ReactDOM.hydrate, App);

const mod = module as any;
if (mod.hot && mod.hot.accept) {
	mod.hot.accept(async () => {
		const FreshApp = (await import("./App")).default;
		render(ReactDOM.render, FreshApp);
	});
}
