import { MenuItem } from "./MenuItem"

export const Menu = () => {
    const handleOrder = (itemName, itemPrice) => {
        alert(`You ordered ${itemName} for ${itemPrice}`);
    }

    return (
        <div>
            <h2>Our Menu</h2>
            <MenuItem name="Pizza" price={10} onOrder={handleOrder} />
            <MenuItem name="Burger" price={5} onOrder={handleOrder} />
            <MenuItem name="Pasta" price={8} onOrder={handleOrder} />
        </div>
    )
}