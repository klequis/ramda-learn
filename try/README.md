# Notes

## name, nameBy, nameWith
Seems there is a pattern: There is a function that takes data and performs an action. Sometimes the same function name with 'By' appended that taks another Ramda function & finally the function name with 'With' appended which takes a predicate. E.g.:

*uniq*
```js
R.uniq([1, 1, 2, 1]); //=> [1, 2]
```

*uniqBy*
```js
R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
```

*uniqWith*




# Use
- defaultTo
- equals
- evolve **
- filter
- find
- findIndex
- forEachObjectIndexed: key, value :)
- groupBy || groupWith: use in <CriteriaTestResults />
- has
- ifElse: maybe useful as a conditional in transformations
- includes: []||{} as you would expect except works with objects
- indexBy: creates new object with all objects in list indexed by the specified key
- indexOf
- map
- innerJoin: like SQL 'where in'. Returns objects from list where predicate returns true
- insert []
- insertAll []
- intersection []
- invert: creates arrays of prop names that have a common prop value
- isEmpty: returns true if value is empty such as [], {}, ''
- isNil: checks if vlaue is null || undefiend
- juxt: apply 1 function to list
- match: like string.prototype.match except returns [] if no matches are found instead of null
- last []
- lastIndexOf []
- length
- 'lenses' in general
- move: move item in list from index x to index y
- objOf: looks very interesting for object creation but not sure where to use
- path, pathEq, pathOr, paths, pathSatisfies
- partition: IS AWESOME
- pick, pickAll, pickBy
- pipe
- pluck
- **project**: sort of like MongoDB's project
- prop, propEq, propIs, propOr, props, propSatisfies
- range: get range from array
- *reduce*,
- **where**: is very useful in doing checking of object properties inside the api. See also **whereEq**.
- zip, zipObj & zipWith all look **useful for creating objects**.
