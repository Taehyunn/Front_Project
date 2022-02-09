import styled from "styled-components";

const LoadingStyle = styled.div`
  position: absolute;
  width: 62px;
  height: 75px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  background: url(../../img/sveltebig.png);
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Loading = () => {
  return <LoadingStyle />;
};
