
document.addEventListener('DOMContentLoaded', (e) => {    
   
        const form1 = document.getElementById('nameSearch');
        const form2 = document.getElementById('liquorSearch');
        
        form1.addEventListener('submit', (e) => {
            
            e.preventDefault();
            document.getElementById('cocktailList').replaceChildren();
            document.getElementById('ingredientList').replaceChildren();
            const inputOne = document.querySelector('#searchByName')
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputOne.value}`)
            .then(res => res.json())
            .then(cocktailData => cocktailData.drinks.forEach(renderCocktailCard))
            .catch(e => console.error(e))
        })

        form2.addEventListener('submit', (e) => {
            
            e.preventDefault();

            document.getElementById('ingredientList').replaceChildren()
            document.getElementById('cocktailList').replaceChildren();
            const inputTwo = document.querySelector('#searchByLiquor')
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${inputTwo.value}`)
            .then(res => res.json())
            .then(ingredientData => ingredientData.ingredients.forEach(renderIngredientCard))
            .catch(e => console.error(e))
        })
    
     
    function renderCocktailCard(cocktailData) {

        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const ul = document.createElement('ul')
        const liOne = document.createElement('li')
        const liTwo = document.createElement('li')
        const liThree = document.createElement('li')
        const liFour = document.createElement('li')
        const liFive = document.createElement('li')
        const liSix = document.createElement('li')
        const liSeven = document.createElement('li')
        const liEight = document.createElement('li')
        const liNine = document.createElement('li')
        const p = document.createElement('p')

        h2.textContent = cocktailData.strDrink
        ul.textContent = "Drink Ingredients:"
        if (cocktailData.strIngredient1 === null) {
            liOne.innerHTML = ""
        }
        else { liOne.textContent = `${cocktailData.strMeasure1} ${cocktailData.strIngredient1}`}
        if (cocktailData.strIngredient2 === null) {
            liTwo.remove()
        }
        else {liTwo.textContent = `${cocktailData.strMeasure2} ${cocktailData.strIngredient2}`}
        if (cocktailData.strIngredient3 === null) {
            liThree.remove()
        }
        else {liThree.textContent = `${cocktailData.strMeasure3} ${cocktailData.strIngredient3}`}
        if (cocktailData.strIngredient4 === null) { 
                liFour.remove()
            }
        else { liFour.textContent = `${cocktailData.strMeasure4} ${cocktailData.strIngredient4}`}
        if (cocktailData.strIngredient5 === null) { 
            liFive.remove()
        }
        else { liFive.textContent = `${cocktailData.strMeasure5} ${cocktailData.strIngredient5}`}
        if (cocktailData.strIngredient6 === null) { 
            liSix.remove()
        }
        else { liSix.textContent = `${cocktailData.strMeasure6} ${cocktailData.strIngredient6}`}
        if (cocktailData.strIngredient7 === null) {
            liSeven.remove()
        }
        else { liSeven.textContent = `${cocktailData.strMeasure7} ${cocktailData.strIngredient7}`}
        if (cocktailData.strIngredient8 === null) {
            liEight.remove()
        }
        else { liEight.textContent = `${cocktailData.strMeasure8} ${cocktailData.strIngredient8}`}
        if (cocktailData.strIngredient9 === null) {
            liNine.remove()
        }
        else { liNine.textContent = `${cocktailData.strMeasure9} ${cocktailData.strIngredient9}`}
        p.textContent = cocktailData.strInstructions

        img.src = cocktailData.strDrinkThumb
        img.className = 'cocktail-avatar'
        div.className = 'cocktailCard'

        ul.append(liOne, liTwo, liThree, liFour, liFive, liSix, liSeven, liEight, liNine)
        div.append(h2, img, ul, p)
        document.querySelector('#cocktailList').append(div)
    }

    function renderIngredientCard(ingredientData) {

        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const pOne = document.createElement('p')
        const pTwo = document.createElement('p')
        const btn = document.createElement('btn')

        h2.textContent = ingredientData.strIngredient
        pOne.textContent = ingredientData.strDescription
        pTwo.textContent = `Alcohol: ${ingredientData.strAlcohol}`

        div.className = 'ingredientCard'

        div.append(h2, pOne, pTwo, btn)
        document.querySelector('#ingredientList').append(div)
    }
    
    })