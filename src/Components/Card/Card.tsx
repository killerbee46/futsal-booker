import { Button, Card, Col, Form, Input, Row, Space, Typography } from 'antd';
import './Card.css';

export default function Cards(props:any){
    return(
          <Card className='card'>
            {props.children}
  </Card>
    );
}