const fs = require("fs");
const path = require("path");

const folderPath = path.resolve(__dirname, "./public/icons"); // <-- путь к папке с SVG

function replaceColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Заменяем fill="..." на fill="currentColor", кроме fill="none"
  content = content.replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"');

  // Заменяем stroke="..." на stroke="currentColor", кроме stroke="none"
  content = content.replace(
    /stroke="(?!none)[^"]*"/gi,
    'stroke="currentColor"',
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (path.extname(fullPath).toLowerCase() === ".svg") {
      replaceColorsInFile(fullPath);
    }
  });
}

walkDir(folderPath);
console.log("Done!");
