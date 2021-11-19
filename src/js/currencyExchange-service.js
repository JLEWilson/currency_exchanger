
export default class CurrencyExchange{
  static async getUSDExchangeRates(){
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if(!response.ok){
        throw Error(response.statusText);
      }
      return await response.json();
    } catch(error) {
      return error.message;
    }
  }
}