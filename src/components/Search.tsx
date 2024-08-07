import { FC } from 'react'
import classNames from 'classnames'

const Search: FC = () => {
  const generalClasses = 'bg-white p-2 rounded-lg'
  const classes = classNames(generalClasses)
  
  return (
    <div className={classes}>Search</div>
  )
}

export default Search