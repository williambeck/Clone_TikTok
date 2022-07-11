import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar, Button} from "./styles";


function Header() {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon src="/images/LogoIcon.svg"></LogoIcon>
                    <Logo src="/images/logo.svg"></Logo>
                </LogoContainer>
                <OptionsContainer>
                    <Icon></Icon>
                    <Avatar>                
                    </Avatar>
                    <Button>Entrar</Button>
                </OptionsContainer>
            </Content>
        </Container>
    )
}

export default Header;