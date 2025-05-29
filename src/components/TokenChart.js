import React from 'react';
import './App.css';
import RoadmapProgress from './components/RoadmapProgress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Token Dashboard</h1>
      </header>
      <main>
        <RoadmapProgress />
      </main>
    </div>
  );
}

export default App;

test('TokenChart renders correctly', () => {
  const { getByText } = render(<TokenChart />);
  expect(getByText('Token Distribution Chart')).toBeInTheDocument();
  expect(getByText('Chart component placeholder')).toBeInTheDocument();
});