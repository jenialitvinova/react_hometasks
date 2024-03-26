const ListView = ({names}) => {
    return (
        <div>
            <ul>
                {names.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>

    )
}

export default ListView