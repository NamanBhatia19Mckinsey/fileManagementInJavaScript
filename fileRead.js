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
readFileCustom('file1.txt')
    .then(val1 => {
        console.log(val1);
        return readFileCustom('file2.txt');
    })
    .then(val2 => {
        console.log(val2);
        return readFileCustom('file3.txt');
    })
    .then(val3 => console.log(val3));