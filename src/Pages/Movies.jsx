import { SearchBox } from 'Components/SearchBox';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
    return (
      <div>
        <Outlet />
        <SearchBox />
      </div>
    );
}