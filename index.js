const PublicGoogleSheetsParser = require("public-google-sheets-parser");
const spreadsheetId = "15Ddujj03NSn7w2RNbuJvAKCTvFVJHiJLhQnk47j76ZE";
const fs = require("fs");
const path = require("path");
const ytdl = require("ytdl-core");

const destDirName = "Music Pack BFC";

const options = {  }; // Remplacer par le nom de la feuille

const parser = new PublicGoogleSheetsParser(spreadsheetId, options);

async function parse() {
  try {
    const sheet = await parser.parse();
    console.log(`Number of rows: ${sheet.length}`);

    for (const row of sheet) {
      if (row.Lien) {
        const url = row.Lien;
        const fileName = `${row.Nom}.mp4`;

        const destDir = path.join(__dirname, destDirName);

        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const dest = path.join(destDir, fileName);

        ytdl(url, { filter: format => format.container === 'mp4' })
          .pipe(fs.createWriteStream(dest))
          .on("finish", () => console.log(`Downloaded ${fileName}`))
          .on("error", (err) => console.error(`Error downloading ${fileName}: ${err}`));
      }
    }
  } catch (error) {
    console.error("An error occurred during parsing or downloading:", error);
  }
}

parse();
