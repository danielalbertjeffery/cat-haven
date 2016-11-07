import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteCat() {
            var cat = this.get('model');

            cat.destroyRecord().then(() => {
                this.transitionToRoute('cats');
            })
        }
    }
});
