// import { Spaceship } from "./Spaceship";
import { ManFactory1, ManFactory2, ManufactureFactory } from "./ManufactureFactory";

// ManufactureFactory
const firstCompany = new ManFactory1('First Company');
const secondCompany = new ManFactory2('Second Company');

const heatSensor = firstCompany.createHeatSensor();
const radarSensor = secondCompany.createRadarSensor();

//RadarSensor detect mvt -> missiles
radarSensor.detected();

//HeatSensor detect temp -> shield
heatSensor.detected();








