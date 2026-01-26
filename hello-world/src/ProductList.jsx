export const ProductList = () => {

    const products = [{
        id: 1,
        name: "Laptop",
        price: 1299.99,
    },
    {
        id: 2,
        name: "Mouse",
        price: 25.99,
    }, {
        id: 3,
        name: "Keyboard",
        price: 75.99,
    },
    {
        id: 4,
        name: "Monitor",
        price: 299.99,
    },
    {
        id: 5,
        name: "Webcam",
        price: 49.99,
    }]

    const productElements = products
        .filter((product) => {
            return product.price > 100
        })
        .map((product) => {
            return (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                </div>
            )
        })

    return (
        <div>
            <h2>Our Products</h2>
            {productElements}
        </div>
    )
}