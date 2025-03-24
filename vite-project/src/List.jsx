
function List(props) {

    const category = props.category || "Category";
    const itemList = props.items || [{name: "Items missing"}];

    itemList.sort((a, b) => a.name.localeCompare(b.name));

    /* const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories > 100)
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>) */

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    return (
        <>
                <h3>{category}</h3>
                <ol>{listItems}</ol>
        </>

    );
}
export default List