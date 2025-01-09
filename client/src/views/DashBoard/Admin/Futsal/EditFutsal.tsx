import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import FutsalForm from '../../../../components/Forms/FutsalForm'

const EditFutsal = () => {
  return (
    <DashboardLayout title={"Edit futsal"}>
        <FutsalForm update />
    </DashboardLayout>
  )
}

export default EditFutsal