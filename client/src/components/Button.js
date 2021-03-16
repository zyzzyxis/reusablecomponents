import styled from 'styled-components'
import { FONT_SIZES, INV_TEXT_COLOR, PRIMARY_COLOR } from '../styles'

const Button =  styled.button`
  background: ${PRIMARY_COLOR};
  color: ${INV_TEXT_COLOR};
  font-size:${FONT_SIZES.MEDIUM};
`

export default Button