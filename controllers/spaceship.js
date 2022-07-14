const { response, request } = require('express');


const spaceshipGet = (req = request, res = response) => {
    const query = req.query;

    res.json({
        msn : 'Get API controller',
        query
    });
};

const spaceshipPost = (req, res = response) => {

    const body = req.body;
    res.json({
        msn : 'Post API controller',
        body
    });
};
const spaceshipPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msn : 'Put API controller'
    });
};
const spaceshipDelete = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msn : 'Delete API controller'
    });
};


module.exports = {
    spaceshipGet,
    spaceshipPost,
    spaceshipPut,
    spaceshipDelete
}