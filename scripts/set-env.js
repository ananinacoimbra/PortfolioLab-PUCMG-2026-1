const fs = require('fs');
const path = require('path');

const envFilePath = path.join(__dirname, '../src/environments/environment.ts');

const content = `
export const environment = {
  production: true,
  EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
  EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}',
  EMAILJS_PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY}',
};
`;

fs.mkdirSync(path.dirname(envFilePath), { recursive: true });
fs.writeFileSync(envFilePath, content);

console.log('✅ environment.ts gerado com sucesso!');
