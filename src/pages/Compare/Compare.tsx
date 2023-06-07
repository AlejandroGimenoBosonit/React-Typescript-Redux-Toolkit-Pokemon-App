import React from 'react'
import { Wrapper } from '../../sections'
import { useAppSelector } from '../../app/hooks';
import { CompareContainer } from '../../components';

type Props = {}

const Compare = (props: Props) => {

  // access to the redux state
  const { compareQueue } = useAppSelector(({pokemon}) => pokemon);

  return (
    <div className="compare">
      <CompareContainer pokemon={compareQueue[0]} isEmpty={compareQueue.length < 1} />

      <CompareContainer pokemon={compareQueue[1]} isEmpty={compareQueue.length < 1} />
    </div>
  )
}

export default Wrapper(Compare);