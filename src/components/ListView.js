const ListView = ({names}) => {
    return (
            <ul>
                {names.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>

    )
}

export default ListView