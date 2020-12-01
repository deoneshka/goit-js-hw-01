const countryEntry = prompt('Введите страну, в которую необходимо осуществить доставку:');
let price;

if (countryEntry === null) {
    alert('Отменено пользователем');
} else {
    switch (countryEntry.toLowerCase()) {
      case 'китай':
        price = 100;
        break;
        
      case 'чили':
        price = 250;
        break;
        
      case 'австралия':
        price = 170;
        break;
        
      case 'индия':
        price = 80;
        break;
        
      case 'ямайка':
        price = 120;
        break;
        
      default :
        alert('В вашей стране доставка не доступна');
}
}

if (price !== undefined) {
    alert(`Доставка в ${countryEntry[0].toUpperCase() + countryEntry.slice(1).toLowerCase()} будет стоить ${price} кредитов`)
}

