document.getElementById("convert").addEventListener("click", async () => {
  const currency = document.getElementById("country").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const resultDisplay = document.getElementById("result");

  if (isNaN(amount)) {
    resultDisplay.textContent = "Please enter a valid amount.";
    return;
  }

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/5ecd5d2bb673b49196b90730/latest/${currency}`);
    const data = await response.json();

    if (data.result === "success") {
      const rate = data.conversion_rates.USD;
      const converted = (amount * rate).toFixed(2);
      resultDisplay.textContent = `${amount} ${currency} = ${converted} USD`;
    } else {
      resultDisplay.textContent = "Failed to fetch exchange rate.";
    }
  } catch (error) {
    resultDisplay.textContent = "Error connecting to exchange rate API.";
    console.error(error);
  }
});
