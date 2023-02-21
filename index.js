
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
        const secondH3 = document.createElement('h3')
        const thirdH3 = document.createElement('h3')
        const directions = document.createElement('p')

        h2.textContent = cocktailData.strDrink
        h3.textContent = "Cocktail Ingredients:"
        secondH3.textContent = "Directions:"
        thirdH3.textContent = "Ingredient Measurements in Corresponding Order"

        div.append(h2, img, h3)

        const ingredients = {
            ingredient1: cocktailData.strIngredient1,
            ingredient2: cocktailData.strIngredient2,
            ingredient3: cocktailData.strIngredient3,
            ingredient4: cocktailData.strIngredient4,
            ingredient5: cocktailData.strIngredient5,
            ingredient6: cocktailData.strIngredient6,
            ingredient7: cocktailData.strIngredient7,
            ingredient8: cocktailData.strIngredient8,
            ingredient9: cocktailData.strIngredient9,
        }
        
        for (const [key, value] of Object.entries(ingredients)) {
            const ingredientList = document.createElement('ul')
            ingredientList.id = "ingredientList"
            if (value !== null) {
                const li = document.createElement('li')
                li.innerText = value
                ingredientList.append(li)
            }
            div.append(ingredientList)
        }

        div.append(thirdH3)

        const measurements = {
            measurement1: cocktailData.strMeasure1,
            measurement2: cocktailData.strMeasure2,
            measurement3: cocktailData.strMeasure3,
            measurement4: cocktailData.strMeasure4,
            measurement5: cocktailData.strMeasure5,
            measurement6: cocktailData.strMeasure6,
            measurement7: cocktailData.strMeasure7,
            measurement8: cocktailData.strMeasure8,
            measruement9: cocktailData.strMeasure9,
        }

        for (const [key, value] of Object.entries(measurements)) {
            const measurementList = document.createElement('ul')
            measurementList.Id = "measurementList"
            if (value !== null) {
                const li = document.createElement('li')
                li.innerText = value
                measurementList.append(li)
            }
            div.append(measurementList)
        }

        div.append(secondH3, directions)

        directions.textContent = cocktailData.strInstructions

        img.src = cocktailData.strDrinkThumb
        img.className = 'cocktail-avatar'
        div.className = 'cocktailCard'

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