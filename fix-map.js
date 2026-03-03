const fs = require('fs');
let content = fs.readFileSync('src/components/FeatureTabs.astro', 'utf-8');
content = content.replace(/featureGroup1\.map\(\(feature\)/g, 'featureGroup1.map((feature, index)');
content = content.replace(/featureGroup2\.map\(\(feature\)/g, 'featureGroup2.map((feature, index)');
fs.writeFileSync('src/components/FeatureTabs.astro', content);
