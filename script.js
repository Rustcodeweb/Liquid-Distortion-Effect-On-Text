const text = new Blotter.Text('BlotterJS', {
    family: "Arial, serif",
  	size: 100,
    paddingLeft: 100,
    paddingRight: 100
});


let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.10;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text
});

let scope = blotter.forText(text);
let element = document.getElementById('blotter-container');
scope.appendTo(element);
