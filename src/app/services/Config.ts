

export class Config {
    // LOCAL
    static SERV_URL = 'http://localhost:62079';
    // EXTERNO
    // static SERV_URL = "https://191.242.162.188:62079" /* SITE NA INTERNET */
    // static SERV_URL = "https://191.242.162.188:62079" /* SITE NA INTERNET */
    // static SERV_URL = "http://10.0.0.104:62079" /* KZA ITAREMA */
    // static SERV_URL = "http://192.168.11.17:62079/api/admin"
    // static SERV_URL = "http://10.0.0.153:62079" /* "KZA AMONTADA" */
    // static SERV_URL = "http://192.168.43.211:62079"; /* MEU SMARTPHONE */
    // static SERV_URL = "http://192.168.43.211:62079"; /* SMARTPHONE DA PERMANÊNCIA */
    // static SERV_URL = "http://192.168.2.133:62079" /* PPM TRAIRI */


  public static centralDeTratamentoDeErros(error): string {
    switch (error) {
        case 500:
          return 'Falha no servidor.';
          break;
        case 400:
          return 'Falha na requisição.';
          break;
        case 401:
          return 'Acesso negado!';
          break;
        case 201:
          return 'Registro efetuado com sucesso!';
          break;
        case 409:
          return 'Email já registrado, por gentileza, tente novamente com outro email.';
          break;
    }
  }


}
