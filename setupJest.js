import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// eslint-disable-next-line no-undef
global.M = require("materialize-css");

Enzyme.configure({ adapter: new Adapter() });
