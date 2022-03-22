const getProducts = async () => {
    const response = await fetch("/products.json")
    const data = await response.json()

    return data.prducts
}

export { getProducts }