Marilyn.knockout(ko);

var model = Marilyn.model('something');

var viewModel = {
    'collection': model._collection
};

ko.applyBindings(viewModel);

var i = 0;
var createLoop = setInterval(function() {

    if (i > 4) {
        clearInterval(createLoop);
    }

    model.create({
        name: 'test'
    });

    i++;

}, 250);

function testUpdate() {

    model.update({
        __id: 2
    }, {
        name: 'something'
    }, function(err, results) {
        console.log(results);
    });

}