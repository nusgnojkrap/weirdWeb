const logger = require("../utils/logger");
const path = require("path");
const jsName = path.basename(__filename);

//http://127.0.0.1:9999/jongWeb/select

async function selectHandler(req, res){
    logger.info(jsName, `select start`);
    let resultObj = {}
    resultObj.resultCode = '000';
    resultObj.resultMessage = "success"

    return res.json(resultObj);
}
module.exports = selectHandler;