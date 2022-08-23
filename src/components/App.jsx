import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './sharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>

        </Route>
      </Routes>
    </div>
  );
};
