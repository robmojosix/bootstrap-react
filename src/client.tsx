import "babel-polyfill";
import React from "react";
import ReactDOM, { Renderer } from "react-dom";
import Routes from "./component/Routes";
import { BrowserRouter } from "react-router-dom";

type AppType = typeof Routes;

const ClientRenderedApp = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

function render(renderFunction: Renderer, App: AppType) {
  const element = document.getElementById("app");
  const app = <ClientRenderedApp />;
  renderFunction(app, element);
}

render(ReactDOM.hydrate, Routes);

const mod = module as any;
if (mod.hot && mod.hot.accept) {
  mod.hot.accept(async () => {
    const FreshApp = (await import("./component/Routes")).default;
    render(ReactDOM.render, FreshApp);
  });
}
