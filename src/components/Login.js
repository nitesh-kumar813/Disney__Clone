
import styled from "styled-components";

const Login = (props) =>{
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src = "/images/cta-logo-one.svg" alt= "" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Despcription>
                        Get Premier Access to Raya and the Last Dragon for an additional fee 
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Despcription>
                    <CTALogoTwo src = "/images/cta-logo-two.png" alt= "" />

                </CTA>
                <BgImages />
            </Content>
        </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
   margin-bottom: 10vw;
   width: 100%;
   position: relative;
   min-height: 100vh;
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 80px 40px;
   height: 100%;
`;
const BgImages = styled.div`
background-image: url("/images/login-background.jpg");
height: 100%; 
background-position: top;
background-size: cover;
position: absolute;
right: 0;
left: 0;
top:0;
z-index:-1;
`;

const CTA = styled.div`
margin-bottom: 2vw;
max-width: 600px;
flex-wrap: wrap;
display: flex;
flex-direction: coloumn;
justify-content: center;
align-items: center;
margin-top: 0;
text-align: center;
margin-right:auto;
margin-left:auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width:100%;

`;
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width: 600px; 
display: block;
width:100%;
min-height: 1px;
`;

const SignUp = styled.div`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width:100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0px;
border: 1px solid transparent;                            
border-radius: 4px;

&:hover{
    background-color: #0483ee;
}

`;

const Despcription = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 14px;
margin: 0 0 24;
line-height: 1.5;
letter-spacing: 1px;

`;
const CTALogoTwo = styled.img`
margin-bottom:20px;
max-width: 600px; 
display: inline-block;
vertical-align: bottom;
width:100%;
margin-top: 10px;
`;

export default Login;












