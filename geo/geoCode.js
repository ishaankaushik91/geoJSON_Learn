import Node_geocoder from "node-geocoder";

let options = {
    provider : 'mapquest',

    httpAdapter : 'https',
    apiKey : 'JylDOkOfom4ibnGRueBrxhbkhYGCvuaP',
    formatter : null
};

let geocoder = Node_geocoder(options);

export default geocoder;