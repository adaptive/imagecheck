(document => {
  document.documentElement.classList.add("jpeg");
  let checks = [];
  const setHTMLClass = format => {
    if (format === "avif") {
      document.documentElement.classList.replace("jpeg", "avif");
      checks.push("avif");
    } else if (format === "webp") {
      if (!checks.includes("avif")) {
        document.documentElement.classList.replace("jpeg", "webp");
      }
    }
  };

  const AVIF = new Image();
  AVIF.onload = AVIF.onerror = () => {
    setHTMLClass("avif");
  };
  AVIF.src =
    "data:image/avif;base64,base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=";

  const WebP = new Image();
  WebP.onload = WebP.onerror = () => {
    setHTMLClass("webp");
  };
  WebP.src =
    "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
})(
  (window.sandboxApi &&
    window.sandboxApi.parentWindow &&
    window.sandboxApi.parentWindow.document) ||
    document
);
