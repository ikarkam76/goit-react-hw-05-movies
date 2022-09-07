import { SearchBox } from 'Components1/SearchBox';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
    return (
      <div>
        <Outlet />
        <SearchBox />
      </div>
    );
}