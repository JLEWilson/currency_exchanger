import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currencyExchange-service';

function populateDropdown(id, reference){
  let currencies = Object.keys(reference.conversion_rates);
  for(let i = 0; i < currencies.length; i++){
    $(`#${id}`).append("<option'>" + currencies[i] + "</option>")
  }
}
async function callForCurrencies(id){
  const response = await CurrencyExchange.getUSDExchangeRates();
  populateDropdown(id, response);
}
async function callForAnyRate(convertFrom){
  const response = await CurrencyExchange.getAnyExchangeRate(convertFrom);
  console.log(response);
  return response;
}
callForAnyRate("USD");