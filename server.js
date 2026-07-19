const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000; // Running on Port 5000 to keep it separate

app.use(express.static(path.join(__dirname, 'public')));

// A stored list of industry-relevant quotes & jokes
const itemsList = [
    { quote: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { quote: "There are two ways to write error-free programs; only the third one works.", author: "Alan J. Perlis" },
    { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { quote: "Testing leads to failure, and failure leads to understanding.", author: "Burk Hufnagel" },
    { quote: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { quote: "There are 10 types of people in the world: those who understand binary, and those who don't.", author: "Tech Joke" }
];

// Backend API Endpoint to serve a random item from the list
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * itemsList.length);
    const selectedItem = itemsList[randomIndex];
    res.json(selectedItem);
});

app.listen(PORT, () => {
    console.log(`🚀 Quote Generator running perfectly at http://localhost:${PORT}`);
});