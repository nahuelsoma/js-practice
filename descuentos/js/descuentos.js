function onClickButtonDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = (priceValue * (100 - discountValue)) / 100;

  const resultPrice = document.getElementById("resultPrice");

  resultPrice.innerText =
    "El precio con descuento es de $" + precioConDescuento + ".";
}
