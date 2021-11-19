import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currencyExchange-service';

function populateDropdown(id, reference){
  let currencies = Object.keys(reference.conversion_rates);
  for(let i = 0; i < currencies.length; i++){
    $("#" + id).append("<option>" + currencies[i] + "</option>");
  }
}
function convertAmount(response, convertTo, amount){
  return response.conversion_rates[convertTo] * amount;
}
async function callForCurrencies(id){
  const response = await CurrencyExchange.getUSDExchangeRates();
  populateDropdown(id, response);
}
async function callForAnyRate(convertFrom, convertTo, amount){
  const response = await CurrencyExchange.getAnyExchangeRate(convertFrom);
  convertAmount(response, convertTo, amount);
}
callForCurrencies("exchange-from");
callForCurrencies("exchange-to");

$('#form-conversion').submit((event)=>{
  event.preventDefault();
  let convertFrom = $('#exchange-from').val();
  let convertTo = $('#exchange-to').val();
  let exchangeAmount = $('#amount').val();
  callForAnyRate(convertFrom, convertTo, exchangeAmount);
});