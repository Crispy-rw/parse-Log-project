const fs = require('fs');

const parseTime = (string) => {
  let multiDate =
    /(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\])([\s\S]*?)(?=\s*\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]|$)/g;

  let trimmedString = string.replace(/\[LOG START\]|\[LOG STOP\]/g, '');
  let match;
  while ((match = multiDate.exec(trimmedString))) {
    console.log(match[0]);
  }
};

const parseLog = (log) => {
  let match;
  let regex = /^\[LOG START\][^]*?\[LOG STOP\]$/gm;
  let result = {};
  let section = result;
  while ((match = regex.exec(log))) {
    // console.log(match[0]);
    parseTime(match[0]);
  }
};

fs.readFile('log1.txt', 'utf-8', (err, data) => {
  parseLog(data);
});
