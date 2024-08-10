import { FC } from 'react'
import Input from './UI/Input'
import Button from './UI/Button'
import { FormValues } from '../types/common.types'
import Form from './UI/Form'

const SearchBar: FC = () => {
  const onSubmit = (data: FormValues) => console.log(data)
  
  return (
    <Form 
      extraClasses='bg-white p-2 rounded-lg flex gap-3'
      onSubmit={onSubmit}
    >
      <Input
        placeholder='Search patient id, name...'
        type='text'
        name='search'
        extraClasses='flex-1'
      />
      <Button 
        label='Search'
        type='submit'
      />
    </Form>
  )
}

export default SearchBar