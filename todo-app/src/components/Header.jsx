import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({handleAddTask, showAddTask}) => {
    const location = useLocation()
    return (
        <header className="header">
            <h2>To Do List</h2>
            {location.pathname === '/' && (
                <Button 
                    color={showAddTask ? 'red' : 'green'} 
                    text={showAddTask ? 'Close' : 'Add Task'} 
                    onClick={handleAddTask}
                />
            )}
        </header>
    )
}


export default Header
