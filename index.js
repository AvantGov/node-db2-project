const express = require("express");
const application_router = require("./Routers/application_router")


const server = express();

server.use(application_router)

// * server listens on port 8080 locally
server.listen(8080, () => {
  console.log("server started on port 8080");
});
