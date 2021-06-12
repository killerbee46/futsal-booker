import { actionChannel } from "@redux-saga/core/effects";
import { Typography } from "antd";

export default function LearningItem(props: any) {
    const { data } = props;
    console.log(data);
    return (
        <Typography.Title level={3} style={{color:'white'}}>
            {data?.title}
        </Typography.Title>
    );
}