import { ThemeConfig } from "antd";
import { colors } from "./colors";

export const themeConfig:ThemeConfig = {
    token:{
        colorPrimary:'#0C4F06',
    },
    components:{
        Table:{
        },
        Card:{
            headerBg:colors.primaryColor,
            colorTextHeading:"white",
            boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
        Tabs:{
        },
        Button:{
            primaryColor:'white',
            colorPrimaryBg:'#008000 !important',
            colorBorder:'white'
        },
        Rate: {
            starColor:'#FFAD33'
          },
    }
}