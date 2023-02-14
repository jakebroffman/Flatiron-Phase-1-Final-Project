
document.addEventListener('DOMContentLoaded', (e) => {    
   
    function handleForms (e) {
     
        const form1 = document.getElementById('nameSearch')
        const form2 = document.getElementByID('liquorSearch')
        
        form1.addEventListener('submit', (e) => {

            e.preventDefualt();
            const inputOne = document.querySelector('#searchByName')
            console.log(input.value)
            fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputOne.value}`)
            .then(cocktailData => renderCocktailCard(cocktailData))
            .catch(e => console.error(e))
        })

        form2.addEventListener('submit', (e) => {

            e.preventDefault();
            const inputTwo = document.querySelector('#searchByLiquor')
            console.log(input.value)
            fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?i=${inputTwo.value}`)
            .then(cocktailData => renderCocktailCard(cocktailData))
            .catch(e => console.error(e))
        })
        
    }
     
    function renderCocktailCard(cocktailData) {

        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const ul = document.createElement('ul')
        const liOne = document.createElement('li')
        const liTwo = document.createElement('li')
        const liThree = document.createElement('li')
        const liFour = document.createElement('li')
        const p = document.createElement('p')

        h2.textContent = cocktailData.strDrink
        ul.textContent = "Drink Ingredients:"
        liOne.textContent = `${cocktailData.strIngredient1}, Measurement: ${cocktail.Data.strMeasure1}`
        liTwo.textContent = `${cocktailData.strIngredient2}, Measurement: ${cocktail.Data.strMeasure2}`
        liThree.textContent = `${cocktailData.strIngredient3}, Measurement: ${cocktail.Data.strMeasure3}`
        liFour.textContent = `${cocktailData.strIngredient4}, Measurement: ${cocktail.Data.strMeasure4}`
        p.textContent = cocktailData.strInstructions

        img.src = cocktailData.strDrinkThumb
        img.className = 'cocktail-avatar'
        div.className = 'card'

        ul.append(liOne, liTwo, liThree,liFour)
        div.append(h2, img, ul, p)
        document.querySelector('#cocktailList').append(div)
    }


    
})