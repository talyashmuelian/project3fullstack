class Network {
  constructor() {}
  sendData(method, url, itemName, data) {
    let server = new Server();
    let result = server.generalSortFunc(method, url, itemName, data);
    if (result != null) {
      return result;
    }
  }
}
