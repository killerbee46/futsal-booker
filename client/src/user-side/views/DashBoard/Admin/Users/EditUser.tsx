import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import FutsalForm from '../../../../components/Forms/FutsalForm'

const EditUser = () => {
  return (
    <DashboardLayout title={"Edit futsal"}>
        <FutsalForm update />
    </DashboardLayout>
  )
}

export default EditUser