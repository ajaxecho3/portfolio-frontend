import React from 'react'
import Icons from '../common/Icons';
import InfiniteLoopSlider from '../InfiniteLoopSlider'

type Props = {};
const TAGS: Array<string> = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Sanity.io', 'Redux', 'Styled-Components', 'Framer motion', 'Angular'];

const Skills = (props: Props) => {
  const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];

  const DURATION = 15000;
  const ROWS = 6;
  const TAGS_PER_ROW = 5;
  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr: Array<string>) => {
    return [...arr].sort(() => .5 - Math.random())
  }
  return (
    <div className='flex w-full justify-center'>
      <div className='tag-list'>
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2 ? true : false}>
            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => {
              const label = `#${tag}`

              return (
                <div key={index} style={{ color: COLORS[index] }} className='tag'>
                  <Icons label={label} />
                </div>
              )
            })}
          </InfiniteLoopSlider>
        ))}
        <div className='fade' />
      </div>
    </div>
  )
}

export default Skills