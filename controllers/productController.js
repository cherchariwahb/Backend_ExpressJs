var prods = require('../products.json');


exports.prod_list=function(req, res){
    res.json(prods)
};

exports.prod_id=function(req, res){
    res.json(prods[req.params.id])
};
exports.prod_id_qte=function(req, res){
    var prod=prods[req.params.id]
    var qte = req.params.qte;
    res.json({
        id: req.params.id,
        quantite: qte,
        unit_price: prod.price,
        total_price: prod.price*qte
    })
};
exports.prod_stock=function(req, res){
    var qte = req.params.qte;
    var filtredProds = {};
    
    Object.keys(prods).forEach(function(key) {
        var prod = prods[key]
        if (prod.stock >= qte){
            filtredProds[key] = prod
        }
    });
    res.json(filtredProds);
};