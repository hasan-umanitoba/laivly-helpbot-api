var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ActionSchema = new Schema(
    {
        type: {
            type: String,
            required: false, 
            default: 'message'
        },
        pattern: {
            type: String,
            required: true
        },
        response: {
            type: Object,
            required: true
        },
        priority: {
            type: Number,
            required: false,
            default: 1000
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }
    },
    {
        collection: 'actions'
    }
);

module.exports = mongoose.model('Action', ActionSchema);