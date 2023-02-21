
document.addEventListener('DOMContentLoaded', (e) => {    
   
    const form1 = document.getElementById('nameSearch');
    const form2 = document.getElementById('liquorSearch');
        
    form1.addEventListener('submit', (e) => {
            
        e.preventDefault();
        document.getElementById('cocktailList').replaceChildren();
        document.getElementById('ingredientList').replaceChildren();
        const inputOne = document.querySelector('#searchByName')
            
        if (inputOne.value.length > 0) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputOne.value}`)
            .then(res => res.json())
            .then(cocktailData => cocktailData.drinks.forEach(renderCocktailCard))
            .catch(e => console.error(e))
            }
        else {

            }
        })

    form2.addEventListener('submit', (e) => {
            
        e.preventDefault();

        document.getElementById('ingredientList').replaceChildren();
        document.getElementById('cocktailList').replaceChildren();
        const inputTwo = document.querySelector('#searchByLiquor')

        if (inputTwo.value.length > 0) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${inputTwo.value}`)
            .then(res => res.json())
            .then(ingredientData => ingredientData.ingredients.forEach(renderIngredientCard))
            .catch(e => console.error(e))
            }
        else {

            }
        })
     
    function renderCocktailCard(cocktailData) {

        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const pOne = document.createElement('p')
        const pTwo = document.createElement('p')
        const pThree = document.createElement('p')
        const pFour = document.createElement('p')
        const pFive = document.createElement('p')
        const pSix = document.createElement('p')
        const pSeven = document.createElement('p')
        const pEight = document.createElement('p')
        const pNine = document.createElement('p')
        const secondH3 = document.createElement('h3')
        const directions = document.createElement('p')

        h2.textContent = cocktailData.strDrink
        h3.textContent = "Cocktail Ingredients:"
        secondH3.textContent = "Directions:"


        if (cocktailData.strIngredient1 === null) {
            pOne.remove();
        }
        else {
            pOne.textContent = `${cocktailData.strMeasure1} ${cocktailData.strIngredient1}`
        }

        if (cocktailData.strIngredient2 === null) {
            pTwo.remove();
        }
        else {
            pTwo.textContent = `${cocktailData.strMeasure2} ${cocktailData.strIngredient2}`
        }

        if (cocktailData.strIngredient3 === null) {
            pThree.remove();
        }
        else {
            pThree.textContent = `${cocktailData.strMeasure3} ${cocktailData.strIngredient3}`
        }

        if (cocktailData.strIngredient4 === null) { 
            pFour.remove();
            }
        else {
            pFour.textContent = `${cocktailData.strMeasure4} ${cocktailData.strIngredient4}`
        }

        if (cocktailData.strIngredient5 === null) { 
            pFive.remove();
        }
        else {
            pFive.textContent = `${cocktailData.strMeasure5} ${cocktailData.strIngredient5}`
        }

        if (cocktailData.strIngredient6 === null) { 
            pSix.remove();
        }
        else { 
            pSix.textContent = `${cocktailData.strMeasure6} ${cocktailData.strIngredient6}`
        }

        if (cocktailData.strIngredient7 === null) {
            pSeven.remove();
        }
        else { 
            pSeven.textContent = `${cocktailData.strMeasure7} ${cocktailData.strIngredient7}`
        }

        if (cocktailData.strIngredient8 === null) {
            pEight.remove();
        }
        else { 
            pEight.textContent = `${cocktailData.strMeasure8} ${cocktailData.strIngredient8}`
        }

        if (cocktailData.strIngredient9 === null) {
            pNine.remove();
        }
        else { 
            pNine.textContent = `${cocktailData.strMeasure9} ${cocktailData.strIngredient9}`
        }

        directions.textContent = cocktailData.strInstructions

        img.src = cocktailData.strDrinkThumb
        img.className = 'cocktail-avatar'
        div.className = 'cocktailCard'

        div.append(h2, img, h3, pOne, pTwo, pThree, pFour, pFive, pSix, pSeven, pEight, pNine, secondH3, directions)
        document.querySelector('#cocktailList').append(div)
    }

    function renderIngredientCard(ingredientData) {
1
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const pOne = document.createElement('p')
        const pTwo = document.createElement('p')

        h2.textContent = ingredientData.strIngredient
        pOne.textContent = ingredientData.strDescription
        pTwo.textContent = `Alcohol: ${ingredientData.strAlcohol}`

        div.className = 'ingredientCard'

        div.append(h2, pOne, pTwo)
        document.querySelector('#ingredientList').append(div)
    }
    
    const clearButton = document.getElementById('clearButton')

    clearButton.addEventListener('click', (e) => {
            
        document.getElementById('ingredientList').replaceChildren();
        document.getElementById('cocktailList').replaceChildren();

    })
})