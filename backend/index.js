const expressApp = require("./express");

const { SERVER_PORT, SERVER_HOST } = require("./const/const");

const logger = require("./utils/logger");
const path = require("path");
const jsName = path.basename(__filename);


expressApp.listen(SERVER_PORT, SERVER_HOST, () => {
    logger.info(jsName, `start Server`);
})