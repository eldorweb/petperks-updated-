import styled from "styled-components";
import { NavLink as RouteNavLink } from "react-router";

export const NavStyle = styled.div`
    background-color: #fff;
    width: 100vw;
    font-family: lufga600;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-right: 80px;
    padding-left: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media (width <= 1280px) {
        padding-right: 20px;
        padding-left: 20px;
    }
            @media (width <= 800px){
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    .logo_div{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-right: 65px;
                @media (width <= 800px){
            margin-right: auto;
        }
        @media (width <= 1080px){
            margin-right: 20px;
        }
        img{
            width: 41.822px;
            height: 44px;

        @media (width <= 1080px){
            width: 30px;
            height: 34px;
        }
        }
        h2{
            color: #000;
            font-family: Jost;
            font-size: 30px;
            font-weight: 600;
        @media (width <= 1080px){
            font-size: 25px;
        }
        }
    }
    .link{
                @media (width <= 960px){
            font-size: 15px;
        }
    }
    .nav_div{
        display: flex;
        gap: 40px;
        margin-right: auto;
                @media (width <= 960px){
            gap: 15px;
            align-items: center;
            justify-content: center;
        }
                @media (width <= 800px){
            display: none;
        }
    }
    .nav_right{
        display: flex;
        gap: 50px;
                @media (width <= 960px){
            gap: 10px;
        }
        .login_div{
            display: flex;
            gap: 5px;
                    @media (width <= 960px){
                        .login{
                            font-size: 15px;
                        }
                        .register{
                            font-size: 15px;
                        }
        }
        }
        .icon_div{
            display: flex;
            gap: 30px;
        @media (width <= 1080px){
            gap: 15px;
        }
            svg:hover path{
                fill: red;
                stroke: red;
            }
        }
        .nav_burger{
            display: none;
                    @media (width <= px){
            margin-right: 20px;
        }
                @media (width <= 800px){
            display: flex;
        }
        }
    }
`

export const NavLink = styled(RouteNavLink)`
text-decoration: none;
font-family: lufga400;
font-size: 16px;
color: #24262B;
cursor: pointer;
display: flex;
gap: 5px;
align-items: center;
&.active{
    color: red;
}
&.active svg path{
    fill: red;
    stroke: red;
}
&:hover{
    color:rgba(255, 0, 0, 0.48);
}
&:hover svg path{
    fill: rgba(255, 0, 0, 0.48);
}

` 