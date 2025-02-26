import React from 'react'

import FixedConfirmationToast from '../_fixed_confirmation_toast'

const FixedConfirmationToastMultiLine = (props) => {
  return (
    <div>
      <FixedConfirmationToast
          multiLine
          status="tip"
          text="Scan to Assign Selected Items. Click here to generate report"
          {...props}
      />
    </div>
  )
}

export default FixedConfirmationToastMultiLine
