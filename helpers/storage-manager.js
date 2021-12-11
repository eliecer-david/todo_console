const fs = require('fs');

const filePath = './storage/data.json';

const saveData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

const readData = () => {
    let data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return JSON.parse(data);
}

module.exports = {
    saveData, readData
};
