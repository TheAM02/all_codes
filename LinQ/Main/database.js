import Database from '@replit/database'
import getReplitUrl from "../Server/db-url-fetch.js";

const url = await getReplitUrl();
export default new Database(url)