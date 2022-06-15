document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){
    const petName = document.querySelector('input').value
    try{
        const response = await fetch(`https://renaes-pet-api.herokuapp.com/api/${petName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('petName').innerText = data.petName
        document.getElementById('petGender').innerText = data.Gender
        document.getElementById('petDescription').innerText = data.description
        document.getElementById('petType').innerText = data.type
        document.getElementById('petPasstimes').innerText = data.favoriteActivites

        document.getElementById('image').src = data.image
        //document.getElementById('alienCaption').innerText = data.speciesName





    } catch(error) {
        console.log(error)

    }

}