const fs = require('fs');

function readFileCustom(filename) {
    return new Promise((resolve, request) => {
        fs.readFile(`./${filename}`, 'utf8', (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
// fs.readFile('file1.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);

//     fs.readFile('file2.txt', 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);

//         fs.readFile('file3.txt', 'utf-8', (err, data) => {
//             if (err) throw err;
//             console.log(data);
//         });
//     });
// });
var value = 1;
readFileCustom('file1.txt')
    .then(val1 => {
        value *= val1;
        return readFileCustom('file2.txt');
    })
    .then(val2 => {
        value *= val2;
        return readFileCustom('file3.txt');
    })
    .then(val3 => {
        value *= val3;
        return readFileCustom('file4.txt');
    })
    .then(val4 => {
        value *= val4;
        return readFileCustom('file5.txt');
    })
    .then(val5 => {
        value *= val5;
        console.log(value);
    });