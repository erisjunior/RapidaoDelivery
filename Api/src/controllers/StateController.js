const express = require('express');
const mongoose = require('mongoose');

const State = mongoose.model('State');

module.exports = {
    async index(req, res) {

        const { page = 1 } = req.query;

        const states = await State.paginate({}, { page, limit: 15, sort: {uf : "desc" } });

        return res.json(states);
    },

    async show(req, res) {
        const state = await State.findById(req.params.id);

        return res.json(state);
    },

    async store(req, res) {
        const state = await State.create(req.body);

        return res.json(state)
    },

    async update(req, res) {
        const state = await State.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(state)
    },

    async destroy(req, res) {

        const { name } = await State.findByIdAndRemove(req.params.id);

        return res.send(`${name} removido com sucesso`)

    },

}