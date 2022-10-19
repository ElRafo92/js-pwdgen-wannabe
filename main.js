const Name =  prompt (`Inserisci il tuo nome:`)
const Surname =  prompt (`Inserisci il tuo cognome:`)
const FavouriteColor =  prompt (`Inserisci il tuo colore preferito:`)
const newPassword = `${Name}${Surname}${FavouriteColor}76`

document.getElementById(`psswrd`).innerHTML = newPassword;