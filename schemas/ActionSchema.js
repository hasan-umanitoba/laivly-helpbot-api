var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ActionSchema = new Schema(
    {
        expression: {
            type: String,
            required: true
        },
        action: {
            type: String,
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