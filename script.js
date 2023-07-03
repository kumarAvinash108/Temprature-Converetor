//calculateTemp function
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
   const tempSelected = document.getElementById('temp_diff');
   const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

   // converting celsius to fahrenheit
  const celtoFah = (c) => {
let fahrenheit = Math.round((c*9/5)+32);
return fahrenheit;
   }


   // converting celsius to fahrenheit
   const fahtoCel = (f) => {
    let cel = Math.round((f-32)*5/9);
    return cel;
       }

let result;
if(valueTemp=='cel'){
    result = celtoFah(numberTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`
}
else{
    result = fahtoCel(numberTemp);
    document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`;
}
}