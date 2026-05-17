const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-[#fafaf9]': 'bg-background',
  'bg-white': 'bg-surface',
  'bg-[#1c1917]': 'bg-foreground',
  'text-[#1c1917]': 'text-foreground',
  'text-[#78716c]': 'text-muted',
  'text-[#a8a29e]': 'text-muted-light',
  'border-[#e7e5e4]': 'border-border',
  'hover:text-[#1c1917]': 'hover:text-foreground',
  'hover:text-[#fafaf9]': 'hover:text-background',
  'hover:bg-[#1c1917]': 'hover:bg-foreground',
  'hover:bg-white': 'hover:bg-surface'
};

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (fullPath.endsWith('.tsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

const dirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app')
];

dirs.forEach(dir => {
  const files = walkDir(dir);
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    for (const [search, replace] of Object.entries(replacements)) {
      content = content.split(search).join(replace);
    }
    if (original !== content) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  });
});
