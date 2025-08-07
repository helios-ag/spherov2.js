[![npm version](https://img.shields.io/npm/v/spherov2.js.svg?style=flat)](https://www.npmjs.org/package/spherov2.js)

# Sphero API V2

Unofficial Sphero JS API for V2 Robots. This API will work with V2 robots like mini, mcqueen, r2d2, bolt. Basic movements operations are working. Sensor reading is experimental as we still need to interpret the data.

## Supported Robots

* Mini
* R2D2
* Bolt
* Lighting McQueen
* BB9e

## Contributors - Special Thanks!

TODO

## Examples

### Sphero Mini - Let the main LED blink in different colors

```javascript
const { Scanner, Utils } = require('spherov2.js');

const makeItBlink = async () => {
  const sphero = await Scanner.findSpheroMini();
  
  if (!sphero) return console.log('sphero mini not available!');
  
  while (true) {
    await sphero.setMainLedColor(255, 0, 0);
    await Utils.wait(200);
    await sphero.setMainLedColor(255, 255, 0);
    await Utils.wait(200);
    await sphero.setMainLedColor(0, 255, 0);
    await Utils.wait(200);
    await sphero.setMainLedColor(0, 255, 255);
    await Utils.wait(200);
    await sphero.setMainLedColor(0, 0, 255);
    await Utils.wait(200);
    await sphero.setMainLedColor(255, 0, 255);
    await Utils.wait(200);
  }
};

makeItBlink();
```

### Sphero Mini - Roll ahead for 2 seconds
```javascript
const { Scanner, Utils } = require('spherov2.js');

const makeItRoll = async () => {
  const sphero = await Scanner.findSpheroMini();
  
  if (!sphero) return console.log('sphero mini not available!');
  
  const speed = 100;
  const headingInDegrees = 0;
  const timeToRollInMilliseconds = 2000;
  const flags = [];
  
  await sphero.rollTime(speed, headingInDegrees, timeToRollInMilliseconds, flags);
};

makeItRoll();
```
