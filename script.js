const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let newString = '';
function generateKey(length, characters){
    for (let i = 0; i < length; i++){
        newString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return newString;
}
generateKey(4, characters)
console.log(newString)