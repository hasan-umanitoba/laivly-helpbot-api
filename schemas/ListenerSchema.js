var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ListenerSchema = new Schema(
    {
        type: {
            type: String,
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
            default: 1000
        },
        options: {
            type: Object,
            default: {}
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
        collection: 'listeners'
    }
);

module.exports = mongoose.model('Listener', ListenerSchema);