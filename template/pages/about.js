import { Fragment } from 'react'
import Link from 'next/link'
import { dataContainer } from '../src/utils/unstated'
import { Subscribe } from 'unstated'
import ExchangeRateList from '../src/components/ExchangeRateList'
const about = (props) => {
  console.log(props)
  return (
    <Subscribe to={[dataContainer]}>
      {(exchangeRate) => {
        return (
          <Fragment>
            <Link href='./index'>
              <button>to page index</button>
            </Link>
            <ExchangeRateList data={exchangeRate.getData()} />
          </Fragment>
        )
      }}
    </Subscribe>
  )
}

export default about
