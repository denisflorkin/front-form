import React from 'react'
import { connect } from 'react-redux'
import RebateForm from '../composites/RebateForm'
import PurchaseForm from '../composites/PurchaseForm'
import UploadFiles from '../composites/UploadFiles'
import Captcha from '../composites/Captcha'
import EmailOpt from '../composites/EmailOpt'
import Submit from '../composites/Submit'

const HomeContainer = props => {
  return (
    <div style={{ padding: '64px 32px' }}>
      <h2>STEP 1: Enter Customer and Purchase Information</h2>
      <RebateForm />
      <PurchaseForm />
      <br />
      <h2>STEP 2: UPLOAD proof of purchase, and any required signatures</h2>
      <UploadFiles />
      <br />
      <h2>STEP 3: OPT-IN/OUT for receiving promotional email</h2>
      <EmailOpt />
      <br />
      <h2>STEP 4: Confirm that you are a live person</h2>
      <Captcha />
      <h2>STEP 5: SUBMIT this rebate request</h2>
      <br />
      <Submit />
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDisaptchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDisaptchToProps)(HomeContainer)
