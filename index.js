
document.addEventListener('DOMContentLoaded', (e) => {    
   
        const form1 = document.getElementById('nameSearch');
        const form2 = document.getElementById('liquorSearch');
        
        form1.addEventListener('submit', (e) => {
            
            e.preventDefault();
            const inputOne = document.querySelector('#searchByName')
            fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputOne.value}`)
            .then(res => res.json())
            .then(cocktailData => cocktailData.drinks.forEach(renderCocktailCard))
            .catch(e => console.error(e))
        })

        form2.addEventListener('submit', (e) => {
            
            e.preventDefault();
            const inputTwo = document.querySelector('#searchByLiquor')
            fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?i=${inputTwo.value}`)
            .then(res => res.json())
            .then(cocktailData => cocktailData.ingredients.forEach(renderIngredientCard))
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
        const p = document.createElement('p')

        h2.textContent = cocktailData.strDrink
        ul.textContent = "Drink Ingredients:"
        if (cocktailData.strMeasure1 === null) {
            liOne.innerHTML = ""
        }
        else { liOne.textContent = `${cocktailData.strMeasure1} ${cocktailData.strIngredient1}`}
        if (cocktailData.strMeasure2 === null) {
            liTwo.innerHTML = ""
        }
        else {liTwo.textContent = `${cocktailData.strMeasure2} ${cocktailData.strIngredient2}`}
        if (cocktailData.strMeasure3 === null) {
            liThree.innerHTML = ""
        }
        else {liThree.textContent = `${cocktailData.strMeasure3} ${cocktailData.strIngredient2}`}
        if (cocktailData.strMeasure4 === null) { 
                liFour.innerHTML = ""
            }
        else { liFour.textContent = `${cocktailData.strMeasure4} ${cocktailData.strIngredient4}`}
        p.textContent = cocktailData.strInstructions

        // img.src = cocktailData.strDrinkThumb
        img.className = 'cocktail-avatar'
        div.className = 'card'

        ul.append(liOne, liTwo, liThree,liFour)
        div.append(h2, img, ul, p)
        document.querySelector('#cocktailList').append(div)
    }
    
})