import Layout from "../components/Layout";

import styled from "styled-components"

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export default function Home() {
  return (
    <>
    <Layout></Layout><Title>TikTok</Title></>

    
  )
}
