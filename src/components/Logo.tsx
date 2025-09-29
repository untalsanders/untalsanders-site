'use strict'

import LogoCircleSVG from './LogoCircleSVG'
import LogoSquareSVG from './LogoSquareSVG'

type Props = {
  type?: 'circle' | 'square'
}

export function Logo({ type = 'circle' }: Props) {
  return type === 'circle' ? <LogoCircleSVG /> : <LogoSquareSVG />
}
