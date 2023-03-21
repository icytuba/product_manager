const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products);
            res.json(products);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// just as a note, this file's req.params.{THISVARIABLE} needs to match the routes url path;
// the key for this pair needs to match the database name
// and then the front end variables need to match I think, but they might not have to match the 
// controller {value}/routes pairing or the controller {key}/database pairing

//front end being: Link to= .../:variable in App.js or view file has to match const {variable} = useParams() in component

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params._id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => console.log(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
        .then(deleteConf => res.json(deleteConf))
        .catch(err => console.log(err))
}