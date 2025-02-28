const PublicGoogleSheetsParser = require("public-google-sheets-parser");
const spreadsheetId = "15Ddujj03NSn7w2RNbuJvAKCTvFVJHiJLhQnk47j76ZE";
const fs = require("fs");
const path = require("path");
const ytdl = require("ytdl-core");

const destDirName = "Music Pack BFC";

const options = { sheetName: "NOM_DE_LA_SHEET" }; // Remplacer par le nom de la feuille

const parser = new PublicGoogleSheetsParser(spreadsheetId, options);

async function parse() {
  const sheet = await parser.parse();

  console.log(sheet.length);
  for (const row of sheet) {
    if (row.Lien) {
      const url = row.Lien;
      const fileName = `${row.Nom}.mp4`;

      const destDir = path.join(__dirname, destDirName);

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
      }
      const dest = path.join(destDir, fileName);

      ytdl(url)
        .pipe(fs.createWriteStream(dest))
        .on("finish", () => console.log(`Downloaded ${fileName}`))
        .on("error", (err) =>
          console.error(`Error downloading ${fileName}: ${err}`)
        );
    }
  }
}

parse();
