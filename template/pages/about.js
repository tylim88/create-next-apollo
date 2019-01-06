import { Fragment } from 'react'
import Link from 'next/link'
import { stateContainer } from '../src/utils/unstated'
import { Subscribe } from 'unstated'
import ExchangeRateList from '../src/components/ExchangeRateList'
const about = () => {
  return (
    <Subscribe to={[stateContainer]}>
      {(exchangeRate) => {
        return (
          <Fragment>
            <Link href='./index'>
              <button>go to Index</button>
            </Link>
            <ExchangeRateList data={exchangeRate.state} />
          </Fragment>
        )
      }}
    </Subscribe>
  )
}

export default about
