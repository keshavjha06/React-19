export const NameList = () => {
    const names = ["John", "Jane", "Jack"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return <div>{nameList}</div>
}