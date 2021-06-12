import { Col, Timeline, Typography } from "antd";
import TimelineItem from "antd/lib/timeline/TimelineItem";

export default function UserItem(props:any){
    const {user} = props;
    return(
        <tr>
            <td>{user?.organizatinname}</td>
            <td>{user?.level}</td>
            <td>{user?.category}</td>
        </tr>
    );
}