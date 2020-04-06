var ListenerSchema = require('../schemas/ListenerSchema');

async function findAll() {
    // Find all clients
    return await ListenerSchema.find({ isActive: true }).sort({ priority: -1 }).exec();
}

async function findById(id) {
    return await ListenerSchema.findById(id).exec();
}

async function create(listeners) {
    // Save multiple listeners
    return await ListenerSchema.create(listeners);
}

async function update(data) {
    // Always return the new Model
    return ListenerSchema.findOneAndUpdate({ _id: data._id }, data, { new: true }).exec();
}

module.exports = {
    findAll, findById, create, update
}