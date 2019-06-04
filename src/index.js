import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

// Polyfills!
import "@babel/polyfill";

const Index = lazy(() => import("./pages/Index"));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="cargando">
      <Index />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// Instalamos el service worker
// Definimos la variable que contendrá al service worker
let worker;
// Esta variable indica que ya se ha forzado la recarga
// de la página
let refreshing = false;

// Agregamos el evento on Click
document.getElementById("reload").addEventListener("click", () => {
  // Mandamos el mensaje al worker
  console.log("regarga");
  worker.postMessage({ action: "skipWaiting" });
});

// Comprobamos que el navegador lo soporte:
if ("serviceWorker" in navigator) {
  // Esperamos a que cargue la web
  window.addEventListener("load", () => {
    // Intentamos instalar el Service worker
    navigator.serviceWorker.register("/sw.js").then(
      registration => {
        // Se ha registrado correctamente
        console.log(
          "El service worker SW se ha registrado correctamente: ",
          registration.scope
        );

        // Nos suscribimos al evento de nueva versión
        registration.addEventListener("updatefound", () => {
          // Obtenemos el nuevo worker
          worker = registration.installing;

          // Nos suscribimos a los cambios en su ciclo de vida
          worker.addEventListener("statechange", () => {
            // Comprobamos si ha habido un cambio
            if (worker.state === "installed") {
              // Una vez que se ha instalado, mostramos el botón
              const updateApp = document.getElementById("updateApplication");
              updateApp.classList.add("show");
            }
          });
        });
      },
      err => {
        // registration failed :(
        console.log("El registro de SW ha fallado :(", err);
      }
    );

    // Nos suscribimos al evento de actualización
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        // Forzamos la recarga de la página
        window.location.reload();
        refreshing = true;
      }
    });
  });
}
