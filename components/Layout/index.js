import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, SidebarContainer, ContentContainer} from "./styles";



function Layout({ Children }) {
    return (
        <>
            <Header></Header>
            <Container>
                <SidebarContainer>
                    <Sidebar></Sidebar>
                </SidebarContainer>
                <ContentContainer>
                    {Children}
                </ContentContainer>
            </Container>
        </>
    
    )   
}

export default Layout;