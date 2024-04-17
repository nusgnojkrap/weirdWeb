const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");

let alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all:true,
        color : { info:"blue" },
    }),
    winston.format.label({
        label:"[LOGGER]",
    }),
    winston.format.timestamp({
        format:"YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf((info) => `[${info.timestamp}] [${info.level}] ${info.message}`)
);

let notalignColorsAndTime = winston.format.combine(
    winston.format.label({
        label: "[LOGGER]",
    }),
    winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf((info) => `[${info.timestamp}] [${info.level}] ${info.message}`)
);

const logger = winston.createLogger({
    level: "debug",
    transports: [
        new winstonDaily({
            filename: `./logs/backendLog`,
            zippedArchive : false,
            format: winston.format.combine(notalignColorsAndTime),
        }),

        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), alignColorsAndTime),
        }),
    ],
});

module.exports.info = function (jsName, msg){
    logger.info(`[${jsName}] ${msg}`)
}

module.exports.error = function (jsName, msg){
    logger.error(`[${jsName}] ${msg}`)
}