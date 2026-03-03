const fs = require('fs');
let text = fs.readFileSync('src/components/FeatureTabs.astro', 'utf-8');
text = text.replace(/featureGroup1\.map\(\s*\(feature,\s*index\)\s*=>\s*\(\s*<button type="button"/g, 'featureGroup1.map((feature, index) => (\n            <button type="button"');
text = text.replace(/featureGroup2\.map\(\s*\(feature,\s*index\)\s*=>\s*\(\s*<button type="button"/g, 'featureGroup2.map((feature, index) => (\n            <button type="button"');
fs.writeFileSync('src/components/FeatureTabs.astro', text);
