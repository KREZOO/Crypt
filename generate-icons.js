const fs = require("fs").promises;
const path = require("path");
const prettier = require("prettier");

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function generateIcons() {
  const iconsDir = path.resolve(__dirname, "public/icons");
  const componentsDir = path.resolve(__dirname, "components/icons");

  await fs.mkdir(componentsDir, { recursive: true });

  const svgFiles = await getAllSvgFiles(iconsDir);

  const exports = [];

  for (const svgFile of svgFiles) {
    const relativeDir = path.relative(iconsDir, path.dirname(svgFile));
    const svgContent = await fs.readFile(svgFile, "utf8");

    const baseName = path.basename(svgFile, ".svg");

    const prefix =
      /^\d/.test(baseName) && relativeDir
        ? capitalize(relativeDir.replace(/[^a-zA-Z0-9]/g, ""))
        : "";

    let componentName =
      (prefix ? prefix : "") +
      baseName
        .split(/[-_ ]+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("") +
      "Icon";

    componentName = componentName.replace(/[^a-zA-Z0-9]/g, "");

    let cleanedSvg = svgContent
      .replace(/<\?xml.+?\?>\s*/g, "")
      .replace(/<!--.*?-->/gs, "");

    // Извлечение width и height
    const widthMatch = cleanedSvg.match(/<svg[^>]*\swidth="([^"]+)"/i);
    const heightMatch = cleanedSvg.match(/<svg[^>]*\sheight="([^"]+)"/i);

    const defaultWidth = widthMatch ? widthMatch[1] : "24";
    const defaultHeight = heightMatch ? heightMatch[1] : "24";

    // Удаление width и height
    cleanedSvg = cleanedSvg.replace(/\s(width|height)="[^"]*"/gi, "");

    // Преобразование kebab-case атрибутов в camelCase
    cleanedSvg = cleanedSvg.replace(/([a-z-]+)=/gi, (match, attr) => {
      const camelAttr = attr.replace(/-([a-z])/g, (m, l) => l.toUpperCase());
      return camelAttr + "=";
    });

    // Вставка пропсов
    cleanedSvg = cleanedSvg.replace(
      /<svg([^>]*)>/,
      `<svg width={width} height={height} {...props} $1>`
    );

    const componentCode = `
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const ${componentName}: React.FC<IconProps> = ({
  width = ${JSON.stringify(defaultWidth)},
  height = ${JSON.stringify(defaultHeight)},
  className,
  ...props
}) => (
  ${cleanedSvg}
);
`;

    const formatted = await prettier.format(componentCode, {
      parser: "typescript",
    });

    const componentPath = path.join(componentsDir, `${componentName}.tsx`);
    await fs.writeFile(componentPath, formatted, "utf8");

    exports.push(`export { ${componentName} } from './${componentName}';`);
    console.log(`Created component: ${componentName}`);
  }

  const indexContent = await prettier.format(exports.join("\n"), {
    parser: "typescript",
  });
  await fs.writeFile(
    path.join(componentsDir, "index.ts"),
    indexContent,
    "utf8"
  );
  console.log("Created components/icons/index.ts");
}

async function getAllSvgFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const res = path.resolve(dir, entry.name);
      return entry.isDirectory() ? getAllSvgFiles(res) : res;
    })
  );
  return files.flat().filter((file) => file.endsWith(".svg"));
}

generateIcons().catch(console.error);
