import R from 'ramda'

const l = console.log

/* ------------------------------------------ */



// lensProp()
// const xLens = R.lensProp('x')
// l(R.view(xLens, { x: 1, y: 2 }))
// l(R.set(xLens, 4, { x: 1, y: 2 }))
// l(R.over(xLens, R.negate, { x: 1, y: 2 }))

// lensIndex()
// const headLens = R.lensIndex(0)
// l(R.view(headLens, ['a', 'b', 'c']))
// l(R.set(headLens, 'x', ['a', 'b', 'c']))
// l(R.over(headLens, R.toUpper, ['a', 'b', 'c']))

// lens()
// const xLens = R.lens(R.prop('x'), R.assoc('x'))
// l(R.view(xLens, { x: 1, y: 2 }))
// l(R.set(xLens, 4, { x: 1, y: 2 }))
// l(R.over(xLens, R.negate, { x: 1, y: 2 }))
