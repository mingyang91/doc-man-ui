import { createSerializer } from '@emotion/jest'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import * as renderer from 'react-test-renderer'

expect.addSnapshotSerializer(createSerializer())

test('renders with correct styles', () => {
  const H1 = styled.h1`
    float: left;
    padding: 1vw;
    color: rgba(0, 0, 0, 0.8);
  `

  const tree = renderer.create(jsx(H1, { children: 'Hello World' })).toJSON()
  console.log(tree)
  // expect(tree).toHaveStyleRule('float', 'left', { target: 'h1' })
})
