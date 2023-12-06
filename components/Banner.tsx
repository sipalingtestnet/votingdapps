import { globalActions } from '@/store/globalSlices'
import { RootState } from '@/utils/types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Banner = () => {
  const dispatch = useDispatch()
  const { setCreateModal } = globalActions
  const { wallet } = useSelector((states: RootState) => states.globalStates)

  const onPressCreate = () => {
    if (wallet === '') return toast.warning('Connect wallet first!')
    dispatch(setCreateModal('scale-100'))
  }

  return (
    <main className="mx-auto text-center space-y-8">
     

      <br/>
      <h1 className="text-[45px] font-[600px] text-center leading-none">Voting Dapps</h1>
      <p className="mt-8 text-gray-700 dark:text-gray-300" data-astro-cid-j7pv25f6="">
      Revolutionizing Elections: Shaking Up the System with Innovative Voting Dapps.
</p>
      <button
        className="text-black h-[45px] w-[148px] rounded-full transition-all duration-300
        border border-neutral-400 bg-white hover:bg-opacity-20 hover:text-white"
        onClick={onPressCreate}
      >
        Create poll
      </button>
     
          </main>
  )
}

export default Banner
