import Ember from 'ember';

let bookmarks = [{
    id: 1,
    title: 'Microsoft',
    link: 'https://www.microsoft.com',
    about: 'At Microsof our mission and values are to help people and business'
},
{
    id: 2,
    title: 'Wikipedia',
    link: 'https://pt.wikipedia.org/',
    about: 'A enciclopédia livre que todos podem editar.'
},
{
    id: 3,
    title: 'Apple',
    link: 'https://www.apple.com/',
    about: null
}
];
export default Ember.Route.extend({
    model() {
        return bookmarks;
    }
});
