/**
 * EditableController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

    PreviewInfo: function(req, res) {
        Editable.find()
            .where({ type: 'PreviewInfo' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });
    },

    UpdatePreviewInfo: function(req, res) {
        Editable.findOne({ '_id': req.param('id') }, function(err, items){
            if (err) return res.send(err, 500);

            res.send(items, 200);
        });
    },

    Featurette: function(req, res) {
        Editable.find()
            .where({ type: 'Featurette' })
            .exec(function(err, items){
                if (err) return res.send(err, 500);
                res.send(items, 200);
            });

    },

    UpdateFeaturette: function(req, res) {

    }

};
