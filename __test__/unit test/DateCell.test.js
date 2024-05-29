import { render } from '@testing-library/react'
import DateCell from '../../components/DateRanger/DataCell'

describe('DateCell', () => {
  it('should render correctly', () => {
    const { container } = render(<DateCell date={'3'} />)
    expect(container)
      .toMatchSnapshot('')
  })
})
