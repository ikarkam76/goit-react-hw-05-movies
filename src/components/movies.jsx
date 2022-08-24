import { Outlet } from 'react-router-dom';

export const Movies = () => {
    return (
        <div>
            <Outlet />
            <h2>Movies</h2>
        </div>
    )
}