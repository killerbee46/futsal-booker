import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import FutsalForm from '../../../../components/Forms/FutsalForm'

const AddFutsal = ({pwner}:any) => {
  return (
    <DashboardLayout title={"Add Futsal"}>
        <FutsalForm />
    </DashboardLayout>
  )
}

export default AddFutsal