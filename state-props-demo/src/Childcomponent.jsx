function Child({ name, age }) {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Name from props: {name}</p>
            <p>Age from props: {age}</p>
        </div>
    );
}

export default Child;