import { FC } from 'react'
import Input from './UI/Input'
import Button from './UI/Button'

const SearchBar: FC = () => {
  return (
    <div 
      className='bg-white p-2 rounded-lg flex gap-3'
    >
      <Input
        extraClasses='flex-1'
        placeholder='Search patient id, name...'
        type='text'
        name='search'
      />
      <Button 
        label='Search'
        type='button'
      />
    </div>
  )
}

export default SearchBar