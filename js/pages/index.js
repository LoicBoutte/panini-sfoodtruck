// Main function, auto called at load time
;(async () => {
  const products = await getProducts()
  hydratePage(products)
})()

async function getProducts() {
  return fetch(`${apiUrl}/api/teddies`)
    .then((httpBodyResponse) => httpBodyResponse.json())
    .then((products) => products)
    .catch((error) => {
      alert(
        "La connexion au serveur n'a pas pu être effectué. Cela est certainement lié à l'endormissement du serveur Heroku, veuillez attendre quelques secondes le temps qu'il sorte de son lit puis réesayez"
      )
    })
}

function hydratePage(products) {
  // Remove loading boxes
  document.getElementById('productsList').innerHTML = ''

  // Loop over all products and displays them
  products.forEach((product) => {
    displayProduct(product)
  })
}

function displayProduct(product) {
  // Get template
  const templateElt = document.getElementById('product')

  // Clone template
  const cloneElt = document.importNode(templateElt.content, true)

  // Hydrate template

  // Display template
  document.getElementById('productsList').appendChild(cloneElt)
}
