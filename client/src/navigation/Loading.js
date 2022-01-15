import styled, { keyframes } from "styled-components";

const Custom = styled.div`
  margin-top: 25vh;
  width: 98vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Balls = styled.div`
  display: flex;
`;
const ball = keyframes`
to{
    transform: translateY(-10px)
}
`;

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000000;
  margin-right: 10px;
  animation: ${ball} 0.5s ease infinite alternate;
`;
const Ball1 = styled(Ball)`
  animation-delay: 0.1s;
`;
const Ball2 = styled(Ball)`
  animation-delay: 0.2s;
`;
const Ball3 = styled(Ball)`
  animation-delay: 0.3s;
`;
const CustomText = styled.span`
  font-weight: 100;
`;

const Loading = () => {
  return (
    <Custom>
      <Balls>
        <Ball1 />
        <Ball2 />
        <Ball3 />
      </Balls>
      <CustomText>Loading...</CustomText>
    </Custom>
  );
};

export default Loading;
