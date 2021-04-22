import styled from "styled-components";
import { black, mainRed, mainYellow } from "../App/GlobalStyle";

export const StyledCountdown = styled.div`
    p{
        font-size:2.5rem;
        font-weight:bold;
    }
#countdown{
    display:flex;
    div{
        display:flex;
        flex-direction:column;
        font-size:3rem;
        font-weight:bold;
        border:5px solid ${mainRed};
        width:8vw;
        height:8vw;
        color:${black};
        background-color:${mainYellow};
        align-items:center;
        justify-content:center;
        p{
            font-size:1rem;
            text-shadow:  none;
        }
    }
}
`;
