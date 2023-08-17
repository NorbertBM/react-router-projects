import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  0% {

    opacity:0;
  }
50%{
    opacity:1;

}
  to {
    opacity:0;
  }
`;
const animate = keyframes`
  0% {
    transform: translateX(-100%);
    opacity:0;
  }
 
  100%{
    transform: translateX(0%);
    opacity:1;
  }
`;
const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  height: 70vh;
  animation: ${animate} 0.8s ease-in-out;
  ol {
    margin-top: 1rem;
    color: purple;
  }
  footer {
    position: absolute;
    bottom: 1rem;
    width: 100%;
    animation: ${rotate} 2s linear infinite;
  }
`;
export { PageWrapper };
