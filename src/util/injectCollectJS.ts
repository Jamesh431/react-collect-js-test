export function injectCollectJS(nmiUrl: string, nmiToken: string) {
  const script = document.createElement("script");
  const body = document.querySelector("body");
  script.setAttribute("src", nmiUrl);
  script.async = true;
  script.setAttribute("data-tokenization-key", nmiToken);
  script.setAttribute("data-variant", "inline");

  let isScriptInjected = false;

  if (body) {
    body.appendChild(script);
  } else {
    throw new Error("Body element not found");
  }

  return new Promise(function (resolve, reject) {
    script.onload = function () {
      if (isScriptInjected) {
        if (window.CollectJS) {
          resolve(window.CollectJS);
        } else {
          reject(new Error("CollectJS not available in window object"));
        }
        return;
      }
    };

    script.onerror = function () {
      reject(new Error("Failed to load CollectJS"));
    };
  });
}
