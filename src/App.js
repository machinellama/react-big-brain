import React from 'react';
import './bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h2>React Big Brain</h2>

      <input type="text" class="form-control item" id="text-input" aria-describedby="text-input" placeholder="Placeholder" />

      <div className="custom-control custom-checkbox item">
        <input type="checkbox" className="custom-control-input" id="checkbox" checked="true" />
        <label className="custom-control-label" for="checkbox">Placeholder</label>
      </div>

      <div className="slider item">
        <label for="slider">Slider</label>
        <input type="range" className="custom-range" id="slider" />
      </div>

      <div className="custom-control custom-switch item">
        <input type="checkbox" className="custom-control-input" id="toggle" checked="true" />
        <label className="custom-control-label" for="toggle">Toggle</label>
      </div>

      <hr />
      <hr />

      <div className="slider item">
        <label for="slider">Slider</label>
        <input type="range" className="custom-range" id="slider" />
      </div>

      <div className="custom-control custom-checkbox item">
        <input type="checkbox" className="custom-control-input" id="checkbox" checked="true" />
        <label className="custom-control-label" for="checkbox">Placeholder</label>
      </div>

      <div className="custom-control custom-switch item">
        <input type="checkbox" className="custom-control-input" id="toggle" checked="true" />
        <label className="custom-control-label" for="toggle">Toggle</label>
      </div>

      <input type="text" class="form-control item" id="text-input" aria-describedby="text-input" placeholder="Placeholder" />
    </div>
  );
}

export default App;
