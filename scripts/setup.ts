import fs from "fs";

if (!fs.existsSync(".env")) {
  fs.writeFileSync(".env", `DATABASE_URL="file:./dev.sqlite3"\n`);
  // eslint-disable-next-line no-console
  console.log("Generated .env file");
}
