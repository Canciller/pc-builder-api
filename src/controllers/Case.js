const Model = require('../models/Case');

exports.get = async (req, res) => {
    try {
        const found = await Model.find();
        res.json(found);
    } catch(err) {
        res.json({ message: err });
    }
}

exports.getSingle = async (req, res) => {
    try {
        const id = req.params.id;
        const found = await Model.findById(id);
        res.json(found)
    } catch(err) {
        res.json({ message: err });
    }
}

exports.add = async (req, res) => {
    try {
        const created = new Model({ ...req.body });
        created.save((err, created) => {
            if(err) throw err;
            return res.json(created);
        });
    } catch(err) {
        res.json({ message: err });
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { ...data } = req.body;
        const updated = await Model.findByIdAndUpdate(id, data, { new: true });
        res.json(updated);
    } catch(err) {
        res.json({ message: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const deleted = await Model.findByIdAndRemove(req.params.id);
        res.json(deleted);
    } catch(err) {
        res.json({ message: err });
    }
}
