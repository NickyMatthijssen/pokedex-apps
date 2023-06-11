import * as fs from "fs";
import { sendStream } from "h3";

export default defineEventHandler((event) => {
  const params = event.context.params as { _: string };
  const path = params._;

  if (!fs.existsSync(`./public/data/${path}`)) {
    return undefined;
  }

  return sendStream(event, fs.createReadStream(`./public/data/${path}`));
});
