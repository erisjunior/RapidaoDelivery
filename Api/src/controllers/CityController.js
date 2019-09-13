const express = require('express');
const mongoose = require('mongoose');

const City = mongoose.model('City');

module.exports = {
    async index(req, res) {

        const { page = 1 } = req.query;

        const cities = await City.paginate({}, { page, limit: 15, sort: {uf : "desc" } });

        return res.json(cities);
    },

    async show(req, res) {
        const city = await City.findById(req.params.id);

        return res.json(city);
    },

    async store(req, res) {
        const city = await City.create(req.body);

        return res.json(city)
    },

    async update(req, res) {
        const city = await City.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(city)
    },

    async destroy(req, res) {

        const { name } = await City.findByIdAndRemove(req.params.id);

        return res.send(`${name} removido com sucesso`)

    },

}