const express = require('express'),
    router = express.Router(),
    request = require('request')
app = express();

/* Variable de autor */
const jsonAuthor = {
    name: "Sebastian",
    lasnatme: "Garcia"
}

function mergeDataItems(_products, _breadcrumb) {

    return { "author": jsonAuthor, "items": _products, "categories": _breadcrumb };
};

function mergeDataOneItem(_products, _breadcrumb) {

    return { "author": jsonAuthor, "item": _products, "categories": _breadcrumb };
};

function getBreadcrumb(_filters) {
    var breadcrumb = [];

    _filters.forEach(function (_filter) {

        if (_filter.id === "category") {
            _filter.values[0].path_from_root.forEach(function (_category) {
                breadcrumb.push(_category.name);
            });
        }
    });

    if (breadcrumb.length > 0) {
        return breadcrumb.join(" > ");
    } else {
        return null;
    }
}

router.get('/items/:item_id', (req, res) => {
    var param = (req.params.item_id) ? (req.params.item_id) : (''),
        product

    request.get('https://api.mercadolibre.com/items/' + param, (_err, _res, _data) => {
        product = JSON.parse(_data); /* Resultado detalles item*/

        request.get('https://api.mercadolibre.com/items/' + param + '/description', (_err, _res, _data) => {
            var description = JSON.parse(_data); /* Resultado descripción */

            /* Se usa la api de categorias para obtener el breadcrumb con el category_id brindando en el resutado de la consulta al item*/
            request.get('https://api.mercadolibre.com/categories/' + product.category_id, function (_err, _res, _data) {
                /* solicitar breadcrumb */
                var breadcrumb = JSON.parse(_data); /* resultado categorias */
                breadcrumb = breadcrumb.path_from_root.map(function (_category) {
                    return _category.name;
                }).join(" > ");
                /* organizar estructura como se solicita en la prueba */
                infoProducto = {
                    id: product.id,
                    title: product.title,
                    price: {
                        currency: product.currency_id,
                        amount: product.price,
                    },
                    picture: product.pictures ? product.pictures[0].url : '',
                    condition: product.condition,
                    free_shipping: product.shipping ? product.shipping.free_shipping : '',
                    address: product.address,
                    sold_quantity: product.sold_quantity,
                }

                /* agregar variable descripcion anteriormente dada */
                infoProducto["description"] = description.plain_text;

                productoInfo = { "author": jsonAuthor, "item": infoProducto, "categories": breadcrumb }
                if (product.status == 404) {
                    return res.json({
                        error: "not_found",
                        status: 404
                    })
                } else {
                    return res.json(productoInfo);
                }
            });
        });
    });
});

router.get('/items', (req, res) => {
    var param = (req.query.q) ? (req.query.q) : (''),
        items, breadcrumb;
    request.get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + param, (_err, _res, _data) => {
        var data = JSON.parse(_data);
        auxItems = data.results;
        breadcrumb = getBreadcrumb(data.filters); /* acceder a la categoria que se encuentra en filters */

        /* organizar estructura como se solicita en la prueba */
        items = auxItems.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                address: item.address,
            }
        })
        
        var productos = { "author": jsonAuthor, "items": items, "categories": breadcrumb }
        return res.json(productos);

    });
});

module.exports = router;