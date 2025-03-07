import { Button, Col, Flex, Form, Input, message, Modal, Row } from 'antd'
import React, { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getToken, localUser } from '../../api/AuthApi'
import dayjs from 'dayjs'
import { useMutation } from '@tanstack/react-query'
import { addBooking } from '../../api/BookingApi'

const BookingConfirmationModal = ({ data, refetch, owner }: any) => {
    const [bookingModal, setBookingModal] = useState(false)
    const {mutate:bookFutsal, isPending:loading, error} = useMutation({
        mutationFn:addBooking,
        onSuccess(data:any) {
            message.success(data?.data?.message)
            setBookingModal(false);
            refetch()
        },
      })

      const modalSwitch = () => {
        if (bookingModal) {
            setBookingModal(false)
        } else {
            if (token && token !== "") {
                setBookingModal(true)
            } else {
                const ref = window?.location?.pathname
                navigate(`/auth/login?ref=${ref}`)
                message.error("Please login to proceed further!")
            }
        }
      }

    const { id } = useParams()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const date = searchParams.get('date')
const token = getToken()
const user = localUser()
    const onConfirm = (values:any) => {
        const formData = {
            ...values,
            booker: user?._id,
            futsal:id || data?.futsal?._id,
            date:date,
            time:data?.key,
            rate:data?.futsal?.rate || "1000"
        }
        if (token && token !== "") {
            bookFutsal(formData)
        } else {
            const ref = window?.location?.href
            navigate(`/login?ref=${ref}`)
        }
    }
    return (
        <div>
            <Button disabled={data?.booked} onClick={modalSwitch} className={`button ${!data?.booked ? 'success' : 'danger'}`}>{data?.start} - {data?.end}</Button>
            <Modal onCancel={() => setBookingModal(false)} title="Booking Details" open={bookingModal} footer={null}>
                <Form layout='vertical' onFinish={onConfirm}>
                    <Row className='my-4' gutter={20}>
                        <Col span={24}>
                            <Form.Item label="Futsal Name">
                                <Input disabled value={data?.futsal?.name} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Name" name='name'>
                                <Input value={date || dayjs()?.format("YYYY-MM-DD")} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Contact" name="contact">
                                <Input value={date || dayjs()?.format("YYYY-MM-DD")} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Date">
                                <Input disabled value={date || dayjs()?.format("YYYY-MM-DD")} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Time">
                                <Input disabled value={data?.start + " - " + data?.end} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Flex gap={20}>
                                <Button loading={loading} className='button success' htmlType='submit'>Confirm</Button>
                                <Button disabled={loading} className='button danger' onClick={modalSwitch}>Cancel</Button>
                            </Flex>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    )
}

export default BookingConfirmationModal