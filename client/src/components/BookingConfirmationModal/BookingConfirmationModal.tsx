import { Button, Col, Flex, Form, Input, message, Modal, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getToken, localUser } from '../../api/AuthApi'
import dayjs from 'dayjs'
import { useMutation } from '@tanstack/react-query'
import { addBooking, cancelBooking } from '../../api/BookingApi'
import { useForm } from 'antd/es/form/Form'

const BookingConfirmationModal = ({ data, refetch, owner }: any) => {
    const [form] = useForm()
    const {futsal, time, booking} = data
    const [bookingModal, setBookingModal] = useState(false)
    const { mutate: bookFutsal, isPending: loading, error } = useMutation({
        mutationFn: addBooking,
        onSuccess(data: any) {
            message.success(data?.data?.message)
            setBookingModal(false);
            refetch()
        },
        onError(err: any) {
            message.error(data?.data?.message)
            setBookingModal(false);
            refetch()
        }
    })

    const { mutate: cancel, isPending: cancelLoading, error: cancelError } = useMutation({
        mutationFn: cancelBooking,
        onSuccess(data: any) {
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
    const onConfirm = (values: any) => {
        const formData = {
            ...values,
            booker: user?._id,
            futsal: id || futsal?._id,
            date: date,
            time: time?.key,
            rate: futsal?.rate || "1000"
        }
        if (token && token !== "") {
            bookFutsal(formData)
        } else {
            const ref = window?.location?.href
            navigate(`/login?ref=${ref}`)
        }
    }

    const cancelFutsalBooking = (values: any) => {
        const formData = {
            ...values,
            id: booking?._id,
            status: 'Cancelled'
        }
        cancel(formData)
    }

    const formFields = ['date', 'time', 'booker', 'futsal', 'rate', 'name', 'contact', 'status']

    useEffect(() => {
        form.setFieldsValue(booking)
    }, [data])

    return (
        <div>
            <Button
                disabled={booking?.booked && booking?.booker !== user?._id}
                onClick={modalSwitch}
                className={`button ${!booking?.booked ? 'success' : 'danger'}`}>
                    {time?.start} - {time?.end}
            </Button>
            {booking?.booker !== user?._id ?
                <Modal onCancel={() => setBookingModal(false)} title="Booking Details" open={bookingModal} footer={null}>
                    <Form layout='vertical' onFinish={onConfirm}>
                        <Row className='my-4' gutter={20}>
                            <Col span={24}>
                                <Form.Item label="Futsal Name">
                                    <Input disabled value={futsal?.name} />
                                </Form.Item>
                            </Col>
                            {
                                owner &&
                                <>
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
                                </>
                            }
                            <Col span={12}>
                                <Form.Item label="Date">
                                    <Input disabled value={date || dayjs()?.format("YYYY-MM-DD")} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Time">
                                    <Input disabled value={time?.start + " - " + time?.end} />
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
                :
                <Modal onCancel={() => setBookingModal(false)} title="Cancel Booking" open={bookingModal} footer={null}>
                    <Form layout='vertical' form={form} onFinish={cancelFutsalBooking}>
                        <Typography.Paragraph className='!mt-5 !mb-3'>
                            Are you sure you want to cancel booking?
                        </Typography.Paragraph>
                        <div hidden>
                            {
                                formFields?.map((ff: string,i:number) => (
                                    <Form.Item key={i} name={ff}><Input /></Form.Item>
                                ))
                            }
                        </div>
                        <Form.Item>
                            <Flex className='mt-2 -mb-3' gap={20} justify='flex-end' align='center'>
                                <Button loading={cancelLoading} className='button success' htmlType='submit'>Yes</Button>
                                <Button disabled={cancelLoading} className='button danger' onClick={modalSwitch}>No</Button>
                            </Flex>
                        </Form.Item>
                    </Form>
                </Modal>
            }
        </div>
    )
}

export default BookingConfirmationModal