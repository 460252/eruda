// eruda.js
(async () => {
    const origin = true ? "https://eruda-ubo.r58playz.dev/" : "http://localhost:8000/";

    window.addEventListener("DOMContentLoaded", () => {
        const element = document.createElement("script");
        element.src = origin + "dist/eruda.js";
        element.addEventListener("load", () => {
            eruda.init();
        });
        document.body.appendChild(element);
    });
})();
