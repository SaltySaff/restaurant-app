import { menuArray } from "./data.js";

console.log(menuArray)

const emojiButton = new EmojiButton()

const emoji = '🍕'
const emojiMarkup = emojiButton.render(emoji);
document.querySelector('#emoji').innerHTML = emojiMarkup;


