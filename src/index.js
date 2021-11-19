import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currencyExchange-service';
import Utility from './js/utility';

function displayConversion(amount){
  $('#output-area').show();
  $("#output").html(amount);
}
function populateSelects(reference){
  let currencies = Object.keys(reference.conversion_rates);
  for(let i = 0; i < currencies.length; i++){
    $("#exchange-from").append("<option>" + currencies[i] + "</option>");
    $("#exchange-to").append("<option>" + currencies[i] + "</option>");
  }
}
async function callForCurrencies(){
  const response = await CurrencyExchange.getUSDExchangeRates();
  populateSelects(response);
}
async function callForAnyRate(convertFrom, convertTo, amount){
  const response = await CurrencyExchange.getAnyExchangeRate(convertFrom);
  displayConversion(Utility.convertAmount(response, convertTo, amount));
}
callForCurrencies("exchange-from");
$('#form-conversion').submit((event)=>{
  event.preventDefault();
  let convertFrom = $('#exchange-from').val();
  let convertTo = $('#exchange-to').val();
  let exchangeAmount = $('#amount').val();
  callForAnyRate(convertFrom, convertTo, exchangeAmount);
});