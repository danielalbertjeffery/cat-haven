export default function() {

    this.namespace = '/api';

    this.get('/cats');
    this.get('/cats/:id');
    this.post('/cats');
    this.del('/cats/:id')

}
