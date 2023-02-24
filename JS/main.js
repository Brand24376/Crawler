//Main JS File

//The whole deck of cards for a plain UNO game
var wholeDeck = [
    ["Red", "1"], ["Red", "2"], ["Red", "3"], ["Red", "4"], ["Red", "5"], ["Red", "6"], ["Red", "7"], ["Red", "8"], ["Red", "9"], ["Red", "Skip"], ["Red", "Reverse"], ["Red", "+2"], 
    ["Red", "1"], ["Red", "2"], ["Red", "3"], ["Red", "4"], ["Red", "5"], ["Red", "6"], ["Red", "7"], ["Red", "8"], ["Red", "9"], ["Red", "Skip"], ["Red", "Reverse"], ["Red", "+2"], 
    ["Blue", "1"], ["Blue", "2"], ["Blue", "3"], ["", "4"], ["Blue", "5"], ["Blue", "6"], ["Blue", "7"], ["Blue", "8"], ["Blue", "9"], ["Blue", "Skip"], ["Blue", "Reverse"], ["Blue", "+2"], 
    ["Blue", "1"], ["Blue", "2"], ["Blue", "3"], ["", "4"], ["Blue", "5"], ["Blue", "6"], ["Blue", "7"], ["Blue", "8"], ["Blue", "9"], ["Blue", "Skip"], ["Blue", "Reverse"], ["Blue", "+2"], 
    ["Green", "1"], ["Green", "2"], ["Green", "3"], ["Green", "4"], ["Green", "5"], ["Green", "6"], ["Green", "7"], ["Green", "8"], ["Green", "9"], ["Green", "Skip"], ["Green", "Reverse"], ["Green", "+2"], 
    ["Green", "1"], ["Green", "2"], ["Green", "3"], ["Green", "4"], ["Green", "5"], ["Green", "6"], ["Green", "7"], ["Green", "8"], ["Green", "9"], ["Green", "Skip"], ["Green", "Reverse"], ["Green", "+2"],
    ["Yellow", "1"], ["Yellow", "2"], ["Yellow", "3"], ["Yellow", "4"], ["Yellow", "5"], ["Yellow", "6"], ["Yellow", "7"], ["Yellow", "8"], ["Yellow", "9"], ["Yellow", "Skip"], ["Yellow", "Reverse"], ["Yellow", "+2"], 
    ["Yellow", "1"], ["Yellow", "2"], ["Yellow", "3"], ["Yellow", "4"], ["Yellow", "5"], ["Yellow", "6"], ["Yellow", "7"], ["Yellow", "8"], ["Yellow", "9"], ["Yellow", "Skip"], ["Yellow", "Reverse"], ["Yellow", "+2"], 
    ["Red", "0"], ["Blue", "0"], ["Green", "0"], ["Yellow", "0"], ["Black", "+4"], ["Black", "+4"], ["Black", "+4"], ["Black", "+4"], ["Black", "Wild"], ["Black", "Wild"], ["Black", "Wild"], ["Black", "Wild"]
]

//Creating a random stack of cards once it starts
function StartGame()
{
    var randomizedDeck = wholeDeck.sort((a, b) => 0.5 - Math.random())
}