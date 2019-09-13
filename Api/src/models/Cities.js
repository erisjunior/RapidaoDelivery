const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

CitySchema.plugin(mongoosePaginate);

mongoose.model("City", CitySchema);