import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveCat() {
            var newCat = this.get('model');
            this.store.createRecord('cat', newCat).save().then((savedCat) => {
                this.transitionToRoute('cats.cat', savedCat);
            });
        }
    }
});
