export default class Utility{
  static convertAmount(response, convertTo, amount){
    showOutput(response.conversion_rates[convertTo] * amount);
  }
}