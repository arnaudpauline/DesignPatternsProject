"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Spaceship } from "./Spaceship";
const ManufactureFactory_1 = require("./ManufactureFactory");
// ManufactureFactory
const firstCompany = new ManufactureFactory_1.ManFactory1('First Company');
const secondCompany = new ManufactureFactory_1.ManFactory2('Second Company');
const heatSensor = firstCompany.createHeatSensor();
const radarSensor = secondCompany.createRadarSensor();
//RadarSensor detect mvt -> missiles
radarSensor.detected();
//HeatSensor detect temp -> shield
heatSensor.detected();
//# sourceMappingURL=index.js.map