import { FC } from 'react'
import PageTitle from '../../components/UI/PageTitle'
import Button from '../../components/UI/Button'
import { ReactComponent as WhateverIcon } from '../../assets/icons/plus.svg'
import SearchBar from '../../components/SearchBar'
import TableWrapper from '../../components/Table/TableWrapper'

const Home: FC = () => {
  return (
    <div className='flex flex-col gap-5 flex-1'>
      <PageTitle label='Upload an FHIR Endpoints' />
      <div className='flex flex-col gap-3 flex-1'>
        <div className='flex justify-end gap-5'>
          <Button 
            label='Compare endpoints'
            extraClasses='min-w-[177px]'
            type='button'
          />
          <Button 
            label='Upload file'
            extraClasses='min-w-[177px]'
            Icon={WhateverIcon}
            type='button'
            disabled
          />
        </div>
        <SearchBar />
        <TableWrapper />
      </div>
    </div>
  )
}

export default Home