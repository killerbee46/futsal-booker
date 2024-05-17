import { ThemeConfig } from "antd";
import { colors } from "./colors";

export const themeConfig:ThemeConfig = {
    token:{
        
    },
    components:{
        Table:{
        },
        Card:{
            headerBg:colors.primaryColor,
            colorTextHeading:"white",
            boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"
        },
        Tabs:{
        },
        Button:{
        }
    }
}