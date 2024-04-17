function errorHandler(req, res){
    const errorObj = {
        const: "404",
        message: "Error : Not Found",
    };
    return res.json(errorObj);
}

module.exports = errorHandler;