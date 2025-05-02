// TODO figure out how to get this using a .env file
import * as path from 'path';
const serviceAccount = require(path.resolve(__dirname, '../serviceAccountKey.json'));
import {  InitializeFirestore } from "./database/firestore";
InitializeFirestore(serviceAccount); // This needs to be called before any other function related to database calls

import startApiServer from "./server/webapi";
startApiServer();