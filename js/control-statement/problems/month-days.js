var getDaysInMonth = function(month,year) {
    
   return new Date(year, month, 0).getDate();
 
  };
  console.log(getDaysInMonth(1, 2012));
  console.log(getDaysInMonth(2, 2012));
  console.log(getDaysInMonth(3, 2012));
  console.log(getDaysInMonth(4, 2012));
  console.log(getDaysInMonth(5, 2012));
  console.log(getDaysInMonth(6, 2012));
  console.log(getDaysInMonth(7, 2012));
  console.log(getDaysInMonth(8, 2012));
  console.log(getDaysInMonth(9, 2012));
  console.log(getDaysInMonth(10, 2012));
  console.log(getDaysInMonth(11, 2012));
  console.log(getDaysInMonth(12, 2012));