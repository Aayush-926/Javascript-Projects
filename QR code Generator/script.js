const input = document.querySelector("input");
const btnGenerateQr = document.querySelector("#generate-Qr");
const QrImage = document.querySelector("#image-Qr");

function generateQr() {
  const value = input.value.trim();
  if (value === "") {
    alert("Please enter a valid input");
    return;
  }

  const encoded = encodeURIComponent(value);
  QrImage.setAttribute(
    "src",
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encoded
  );
}

btnGenerateQr.addEventListener("click", generateQr);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateQr();
  }
});
