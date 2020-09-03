module.exports.textInput = `
<input type="text" class="form-control item" id="text-input" aria-describedby="text-input" placeholder="Placeholder" />
`;

module.exports.checkbox = `
<div className="custom-control custom-checkbox item">
  <input type="checkbox" className="custom-control-input" id="checkbox" checked="true" />
  <label className="custom-control-label" for="checkbox">Placeholder</label>
</div>
`;

module.exports.toggle = `
<div className="custom-control custom-switch item">
  <input type="checkbox" className="custom-control-input" id="toggle" checked="true" />
  <label className="custom-control-label" for="toggle">Toggle</label>
</div>
`;

module.exports.slider = `
<div className="slider item">
  <label for="slider">Slider</label>
  <input type="range" className="custom-range" id="slider" />
</div>
`;
