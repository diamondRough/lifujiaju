require('./styles/usage/app.scss');

var common = require('./scripts/utils/utils.common.js');
var html = require('./scripts/tpls/index.string')

// common.render('<div>asd</div>');
common.render(html);

require('./scripts/views/index.js');