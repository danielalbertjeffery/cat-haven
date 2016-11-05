import Ember from 'ember';

export default Ember.Route.extend({
    model() {

        return this.store.findAll('cat');

        // Go to the pantry (store), and get all the cats if it has them, return to template
        // No cats in the pantry? Get the adapter to ask the supermarket (server/mirage) for cats
        // Supermarket (server/mirage) understands what a cat is, and has cats, and return them to the pantry(store)

        // Now there are cats in the pantry (store)
    }
});
