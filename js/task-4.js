const numberOfDroids = prompt('Какое количество дроидов Вы бы хотели купить?');
let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;

switch (numberOfDroids) {
  case null: {
    console.log('Отменено пользователем!');
    break;
    }
  
  default: {
    totalPrice = Number(numberOfDroids) * pricePerDroid;

        if (totalPrice <= credits) {
            console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
        } else {console.log('Недостаточно средств на счету!')}
    }
}
