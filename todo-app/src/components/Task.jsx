const Task = ({tasks}) => {
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.text}</h1>
                    <p>{task.day}</p>
                </div>
            ))}
        </div>
    )
}

export default Task
