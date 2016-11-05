import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    age: DS.attr('number'),
    isVaccinated: DS.attr('boolean'),
    hasFIV: DS.attr('boolean'),
    breed: DS.attr('string'),
    photo: DS.attr('string')
});
