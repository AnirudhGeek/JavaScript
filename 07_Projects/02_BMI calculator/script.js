const form = document.querySelector('form');
//const height = parseInt(document.querySelector('#height').value)
// we doesent use this because this will give an empty value 

form.addEventListener('submit', function (e) {
  e.preventDefault();  //it prevents the defaukt action of the submit button that is submitting it to the server

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});