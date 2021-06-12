import { Col, Timeline, Typography } from "antd";
import TimelineItem from "antd/lib/timeline/TimelineItem";

export default function BookingItem(props:any){
    const {book} = props;
    return(
        <tr>
            <td>{book?.organizatinname}</td>
            <td>{book?.level}</td>
            <td>{book?.category}</td>
        </tr>
    );
}