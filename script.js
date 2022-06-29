let index = 0;
setInterval(() => {
  const card = cards[index++];
  document.getElementById("cardNumber").value = card.number;
  document.getElementById(
    "cardExpiry"
  ).value = `${card.exp.month}/${card.exp.year}`;
  document.getElementById("cardCvc").value = card.cvv;

  setTimeout(() => {
    document.getElementsByClassName("SubmitButton")[0].click();
    console.log(`Applied visa ${index}`);
  }, 2000);
}, 4000);
