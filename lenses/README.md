## "Lense"
A lens is a first-class reference to a subpart of some data type. Given a lens there are essentially three things you might want to do

## "Functor"
A functor is a function, given a value and a function, unwraps the values to get to its inner value(s), calls the given function with the inner value(s), wraps the returned values in a new structure, and returns the new structure.


## Ramda Lens Related Functions

- `lens`: Returns a lens for the given getter and setter functions. The getter "gets" the value of the focus; the setter "sets" the value of the focus. The setter should not mutate the data structure.
```js
const xLens = R.lens(R.prop('x'), R.assoc('x'))
// R.prop() is the getter
// R.assoc() is the setter
```
- `lensIndex`: Returns a lens whose focus is the specified index.
- `lensPath`: Returns a lens whose focus is the specified path.
- `lensProp`: Returns a lens whose focus is the specified property.
- `nth`: Returns the nth element of the given list or string. If n is negative the element at index length + n is returned.
- `over`: Returns the result of "setting" the portion of the given data structure focused by the given lens to the result of applying the given function to the focused value.
- `set`: Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value.
- `view`: Returns a "view" of the given data structure, determined by the given lens. The lens's focus determines which portion of the data structure is visible.
