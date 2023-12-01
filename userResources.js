// eruda.js
(async () => {
    const origin = true ? "https://eruda-ubo.r58playz.dev/" : "http://localhost:8000/";

    function initEruda() {
        const element = document.createElement("script");
        element.src = origin + "dist/eruda.js";
        element.addEventListener("load", () => {
            eruda.init();
        });
        document.body.appendChild(element);
    }

    window.addEventListener("DOMContentLoaded", () => {
        // Add event listener for key combination Ctrl + Alt + Tilde
        document.addEventListener("keydown", (event) => {
            if (event.ctrlKey && event.altKey && event.key === "`") {
                initEruda(); // Call the function to initialize Eruda
            }
        });
    });
})();
