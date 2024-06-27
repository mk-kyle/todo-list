import 'react-notifications/lib/notifications.css';


const CmplTodos = ({cmplTodoList, cmplHandle, removeHandle}) =>{
    return (
        cmplTodoList.map((items, index) => {
            return (
                <div className="todo_container" key={`div${index}`}>
                    <div className="ff" key={`title${index}`}>{items.title}</div>
                    <div className="btns_container">
                        <span className="delet_btn" onClick={()=>removeHandle(items)} key={`remove${index}`} >&#9746;</span>
                        <span className="cmpl_btn" onClick={()=>cmplHandle(items)} key={`cmpl${index}`}  >&#9745;</span>
                    </div>
                </div>
            )
        })
    )
}

export default CmplTodos