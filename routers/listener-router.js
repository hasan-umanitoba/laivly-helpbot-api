const router = require('express').Router();
const listenerService = require('../services/ListenerService');

const node = "listeners";

router.get("/", async (request, response) => {
    listenerService.findAll()
        .then(listeners => {
            response.status(200).json(listeners);
        })
        .catch(err => {
            response.status(400).json(err);
        }
    );
});

router.get("/id/:id", async (request, response) => {
    const id = request.params.id;

    listenerService.findById(id)
        .then(listeners => {
            response.status(200).json(listeners);
        })
        .catch(err => {
            response.status(400).json(err);
        }
    );
});

router.post("/", async (request, response) => {
    const listeners = request.body;

    // Save multiple listeners
    listenerService.create(listeners)
        .then(listeners => {
            response.status(200).json(listeners);
        })
        .catch(err => {
            response.status(400).json(err);
        }
    );
});

router.put("/", async (request, response) => {
    const data = request.body;
    
    listenerService.update(data)
        .then(period => {
            response.status(200).json(period);
        })
        .catch(err => {
            response.status(400).json(err);
        }
    );
});

module.exports = router;