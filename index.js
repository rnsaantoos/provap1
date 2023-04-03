const Server = require("./server")
const ManageDB = require('./src/app/database/ManageDB')

class App{

  start() {
    new Server().start()
    ManageDB.connect()
  }
}
new App().start();