import React from 'react'
import style from './styles.module.css'

type SkeletonProps = React.ComponentProps<'div'>

export const Skeleton = (props: SkeletonProps) => {
  return <div {...props} className={`${props.className} ${style.skeleton}`} />
}
