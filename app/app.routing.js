"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var adminDash_component_1 = require('./dashboard/adminDash.component');
var management_component_1 = require('./management/management.component');
var APP_ROUTES = [
    { path: 'admin/manage', component: management_component_1.ManagementComponent },
    { path: 'admin', component: adminDash_component_1.AdminDashComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map