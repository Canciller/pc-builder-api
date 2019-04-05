const router = require('express').Router();

let routes = (controllerPath, url) => {
    let controller = require(controllerPath);

    router.route(url)
        .get(controller.get)
        .post(controller.add);

    router.route(url + '/:id')
        .get(controller.getSingle)
        .put(controller.update)
        .delete(controller.delete);
}

let controllers = [
    'Cpu',
    'CpuCooler',
    'Motherboard',
    'Memory',
    'Storage',
    'Gpu',
    'Psu',
    'Case',
    'Build'
]

for(let i = 0; i < controllers.length; ++i) {
    let controller = controllers[i];
    routes(`../controllers/${controller}`, `/${controller.toLowerCase()}`);
}

module.exports = router;
