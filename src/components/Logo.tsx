'use strict'

import LogoCircleSVG from './LogoCircleSVG'
import LogoSquareSVG from './LogoSquareSVG'

type Props = {
  shape?: 'circle' | 'square'
}

export function Logo({ shape = 'circle' }: Props) {
  return shape === 'circle' ? <LogoCircleSVG /> : <LogoSquareSVG />
}
