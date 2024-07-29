// https://gsi.fly.dev/characters/search?vision=Hydro&weapon=Catalyst

const characterForm = document.querySelector('form');
const characterList = document.querySelector('#characterList');



const getCharacterInfo = async (characterName) => {
    try {
        const characterData = await axios.get(`https://gsi.fly.dev/characters/search?name=${characterName}`);
        // ONLY ACCESS DAATA AND SUCH AFTER GETTING AND AWAITING RESULTS; IE ACCESS THE DATA IN ANOTHER LINE
        return characterData.data.results
    } catch (e) {
        console.log("ERROR", e);
    }
};

// Callback fcn can be an async function! allows us to have async/await functionality!
characterForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const resData = await getCharacterInfo(this.elements.searchbar.value);
    console.log(resData[0]);

    const newCharacterEntry = document.createElement('li');
    const charString = `${resData[0].name} => ${resData[0].vision} => ${resData[0].weapon}`;

    newCharacterEntry.innerText = charString;
    characterList.append(newCharacterEntry);

    this.elements.searchbar.value = "";
});