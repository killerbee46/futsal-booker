import { Content } from "antd/lib/layout/layout"
import { fetchData } from "../../Redux/LearningRedux/LearningActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import LearningItem from "../../Components/LearningItem/LearningItem";

export const Learning =() => {
    const dispatch = useDispatch();
        const onClickHandler = () => {
            dispatch(fetchData({}));
        }
        const myData = useSelector((state:any)=> state.LearningReducer);
    return(
        
        <Content>
            <div><Button
            type="primary"
            loading={myData.loading}
            onClick={() => onClickHandler()}>CLICK HERE</Button></div>
            <div style={{backgroundColor:'black'}}>
                {myData.list.map((data:any,index:number)=>{
                    return <LearningItem data={data} />
                })}
            </div>
        </Content>
    )
}

export default Learning;