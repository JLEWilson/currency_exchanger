export default class Utility{
  static convertAmount(response, convertTo, amount){
    return response.conversion_rates[convertTo] * amount;
  }
}