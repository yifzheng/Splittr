'use client'

import Contribution from '@components/Contribution'
import useEditReceiptStore from '@context/editReceiptStore'


const ViewContributions = () => {
  const { editReceipt, reset } = useEditReceiptStore()

  return (
    <Contribution
      contribution={ editReceipt?.contribution }
      reset={ reset }
    />
  )
}

export default ViewContributions