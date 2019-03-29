module.exports = {
    read: (req, res, next) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('controller', err)
        })
    },
    create: (req,res, next) => {
        const db = req.app.get('db')
        let {img, name, price} = req.body
    
        db.create_product([img, name, price])
        .then(() => {
            res.status(200).send('Product Created')
        }).catch(err => {
            res.status(500).send("there was an error", console.log(err))
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(() => {
            res.status(200).send('product deleted')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    },

    update: (req, res, next) => {
        const db = req.app.get('db')
        const { img, name, price } = req.body
        const {id} = req.params

        db.update_product([ id, img, name, price])
        .then(() => {
            res.status(200).send('user updated')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    }

}
