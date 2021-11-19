import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currencyExchange-service';

async function callForUSDRates(){
  const response = await CurrencyExchange.getUSDExchangeRates();
  return response;
}

callForUSDRates();