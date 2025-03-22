import Button from './Button'

const Header = ({handleAddTask}) => {

    return (
        <header className="header">
            <h1>Header</h1>
            <Button color="green" text="Add Task" onClick={handleAddTask}/>
        </header>
    )
}


export default Header
