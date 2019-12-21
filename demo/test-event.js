import evented from '../src/js/mixins/evented';

const foo = {
  a: 1
};

// evented(foo, { eventBusKey: 'el_' })

evented(foo);
console.dir(foo);
foo.on('happy', () => {
  console.log('happy');
});

foo.trigger('happy');
