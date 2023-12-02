import { createLogger, transports, format } from "winston";
import {ElasticsearchTransport} from 'winston-elasticsearch';
import {LogstashTransport} from 'winston-logstash-transport';

const { combine, timestamp, label, printf,prettyPrint } = format;
const CATEGORY = "winston custom format";

const logger = createLogger({
  level: "info",
  format: combine(
    label({ label: CATEGORY }),
    timestamp({
        format: "MMM DD YYYY HH:mm:ss",
      }),
      prettyPrint()
    ),
  //logger method...
  transports: [
    //new transports:
    new transports.File({
      filename: "./logs.log",
    }),
    new LogstashTransport({
      host: 'logstash',
      port: 9600,
    }),
    new ElasticsearchTransport({
      level: 'info',
      index: 'logs',
      clientOpts: {
        node: 'http://localhost:9200/',       
      },
    }),
  ],
});

export default  logger;