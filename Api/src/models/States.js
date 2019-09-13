const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StateSchema = new mongoose.Schema({
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

StateSchema.plugin(mongoosePaginate);

mongoose.model("State", StateSchema);