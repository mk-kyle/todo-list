const Todos = ({ todoList, compleHandler, deletHandler }) => {
    return (
        todoList.map((items, index) => {
            return (
                <div className="todo_container" key={`div${index}`}>
                    <div key={`title${index}`}>{items.title}</div>
                    <div className="btns_container">
                        <span className="delet_btn" key={`remove${index}`} onClick={() => deletHandler(items.id)}>&#9746;</span>
                        <span className="cmpl_btn" key={`cmpl${index}`} onClick={() => compleHandler(items)} >&#9745;</span>
                    </div>
                </div>
            )
        })
    )
}

export default Todos