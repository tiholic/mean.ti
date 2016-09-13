/**
 * Created by rohit on 7/9/16.
 */
"use strict";
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var chat_component_1 = require("./chat/chat.component");
var appRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'heroes/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'chat',
        component: chat_component_1.ChatComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map