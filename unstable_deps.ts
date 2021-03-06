/**
 * When using unstable dependencies, users need to add `--unstable` and
 * in some cases `--allow-plugin`. In order to make this optional and only
 * required when importing unstable dependencies, this is for now a separate
 * file that will only be imported when needed and therefore not always
 * necessary for other usage that does not require plugins/unstable deps.
 */

export {
  init as initMongoDBPlugin,
  MongoClient as MongoDBClient,
  RELEASE_URL as MONGODB_PLUGIN_RELEASE_URL,
} from "https://deno.land/x/mongo@v0.13.0/mod.ts";

export type {
  ClientOptions as MongoDBClientOptions,
  Database as MongoDBDatabase,
} from "https://deno.land/x/mongo@v0.13.0/mod.ts";
