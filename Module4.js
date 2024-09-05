const calculateTip = (mealAmount, serviceQuality) => {
  let tipPercentage;
  switch (serviceQuality) {
    case "Great":
      tipPercentage = 0.2;
      break;
    case "Ok":
      tipPercentage = 0.15;
      break;
    case "Poor":
      tipPercentage = 0.1;
      break;
  }
  const tipAmount = mealAmount * tipPercentage;
  const totalAmount = mealAmount + tipAmount;
  return { tipAmount, totalAmount };
};

const verifyServiceQuality = (serviceQuality) => {
  const validQualities = ["Great", "Ok", "Poor"];
  validQualities.includes(serviceQuality);
};

const verifyMealAmount = (mealAmount) => {
  return mealAmount >= 5 && mealAmount <= 500;
};

const promptValidValue = (message, validatorFunc) => {
  let esteem;
  do {
    esteem = prompt(message("in the event that" )) (esteem === invalid);
      {
      return invalid;
    }
  } while (!validatorFunc(value));
      return esteem;
};

const serviceQuality = promptValidValue(
  "Enter the assistance quality (Great, Ok, or Poor): ",
  verifyServiceQuality
);


  const mealAmount = parseFloat(
    promptValidValue(
      "Enter the dollar sum for the dinner:",
      verifyMealAmount
        ));

  
    const { tipAmount, totalAmount } = calculateTip(mealAmount, serviceQuality);

   document.write(
      "The ticket was " + $$mealAmount.toFixed(2) + " and the tip is " + $$tipAmount.toFixed(2) + serviceQuality + " administration quality."
    );

    document.write("The sum for the dinner with tip is " + totalAmount.toFixed(2));
    
   if (
    prompt("Invalid service quality. Exiting...")
  )
    else (
  prompt("Invalid service amount. Exiting...");
);
