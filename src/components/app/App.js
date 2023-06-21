import { Routes, Route } from 'react-router-dom';
import Content from '../content/Content';

import './app.sass';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </main>
  );
};
export default App;
