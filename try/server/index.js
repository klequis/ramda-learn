import R from 'ramda'

const l = console.log

/* ------------------------------------------ */

const dataFields = {
  _id: '_id',
  acctId: 'acctId',
  date: 'date',
  description: 'description',
  origDescription: 'origDescription',
  debit: 'debit',
  credit: 'credit',
  type: 'typeOrig',
  checkNumber: 'checkNumber',
  omit: 'omit',
}

// const isDebit = (value) => value < 0
// const isCredit = (value) => value > 0
const removeDoubleSpace = (value) => value.replace(/\s{2,}/g, ' ').trim()

const _swapCreditDebit = (value) => {
  if (value === 0) {
    return value
  }

  return value * -1
}

const _replaceStringWithZero = (value) =>
  typeof value === 'string' ? 0 : value

const _transformCreditDebit = (swapCreditDebit) => (value) => {
  R.pipe(_replaceStringWithZero)(value)
  const nv1 = typeof value === 'string' ? 0 : value
  const nv2 = swapCreditDebit ? _swapCreditDebit(nv1) : nv1
  return nv2
}

const mapFieldToColumn = (column, doc) => {
  // const getFieldValue = R.curry((column, doc) => doc[`field${column}`])
  l('doc', doc)
  return {
    description: doc[`field${column}`],
  }
}

const getFieldValue = (column) => (doc) => doc[`field${column}`]

const isDebit = (value) => value < 0
const isCredit = (value) => value > 0

const _transformData = (account, data) => {
  const { fieldToCol, acctId, swapCreditDebit } = account
  // 1. map field to column
  // 2. transform fields
  const c = data.map((d) => {
    l('d', d)
    return {
      description: R.pipe(
        getFieldValue(fieldToCol.description.col),
        removeDoubleSpace,
        R.trim
      )(d),
      credit: R.pipe(
        getFieldValue(fieldToCol.credit.col),
        _replaceStringWithZero,
        R.cond([
          [R.gt(R.__, 0), (x) => x],
          [R.lt(R.__, 0), R.always(0)],
          [R.T, R.always(0)]
        ])

        // if it is a credit use the value swapped if true
        // if it is not a credit return 0

        // R.ifElse(isDebit, _swapDebitCredit(swapCreditDebit), R.identity(0))
      )(d),
      debit: R.pipe(
        getFieldValue(fieldToCol.debit.col),
        _replaceStringWithZero,
        R.cond([
          [R.gt(R.__, 0), R.always(0)],
          [R.lt(R.__, 0), x => x],
          [R.T, R.always(0)]
        ])
      )(d)
      // debit: getFieldValue(fieldToCol.debit.col, d),
      // type: getFieldValue(fieldToCol.type.col, d)
    }
  })
  l('c', c)
  // const doc = data[0]
  // const a = mapFieldToColumn(fieldToCol.description.col, doc)
  // const column = fieldToCol.description.col
  // l('a', a)

  // const fieldValue = getFieldValue(column, doc)
  // l('fieldValue', fieldValue)
  // const b = {
  //   description: getFieldValue(fieldToCol.description.col, doc),

  // }
  // l('b', b)

  const transformations = {
    // description: mapFieldToColumn(fieldToCol.description.col),
    // date: new Date().toISOString(),
    // credit: _transformCreditDebit,
    // debit: _transformCreditDebit
    // type: R.has(dataFields.type)(fieldToCol)
    //   ? R.pipe(R.toLower, R.trim)(doc[`field${fieldToCol.typeOrig.col}`]) || ''
    //   : '',
    // checkNumber: R.has(dataFields.checkNumber)(fieldToCol)
    //   ? doc[`field${fieldToCol.checkNumber.col}`] || ''
    //   : ''
  }
  // data.map(doc => )

  // const result = R.evolve(transformations)(data)
  // l('result', result)
}

const callit = () => {
  const account = {
    _id: '5e46eef3626be23800bbb040',
    acctId: 'cb.chase.chk.2465',
    dataFile: {
      name: 'cb.chase.chk.2465.csv',
      hasHeaders: true,
    },
    swapCreditDebit: false,
    fieldToCol: {
      date: {
        col: 2,
      },
      description: {
        col: 3,
      },
      debit: {
        col: 4,
        parse: '<0',
      },
      credit: {
        col: 4,
        parse: '>0',
      },
      type: {
        col: 5,
      },
      checkNumber: {
        col: 7,
      },
    },
  }
  const data = [
    {
      field1: 'CREDIT',
      field2: '12/23/2019',
      field3: 'ATM CHECK DEPOSIT 12/22 11030 BOLLINGER CANYON RD SAN RAMON CA',
      field4: 91.5,
      field5: 'ATM_DEPOSIT',
      field6: 4669.84,
      field7: '',
    },
    {
      field1: 'DEBIT',
      field2: '11/20/2019',
      field3: 'ATM WITHDRAWAL                       002138  11/2011030 BOL',
      field4: -100,
      field5: 'ATM',
      field6: 7751.33,
      field7: '',
    },
    {
      field1: 'DEBIT',
      field2: '12/03/2018',
      field3: 'ATM WITHDRAWAL                       002392  12/01300 MONTG',
      field4: -100,
      field5: 'ATM',
      field6: 8810.21,
      field7: '',
    },
  ]
  _transformData(account, data)
}

callit()
