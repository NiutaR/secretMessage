let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

let removeLastMessage = secretMessage.pop();
console.log(secretMessage.length);

let addWords = secretMessage.push('to', 'Program');
console.log(secretMessage);

secretMessage[secretMessage.indexOf('easily')] = 'right';
console.log(secretMessage);

let removeFirst = secretMessage.shift();
console.log(secretMessage);