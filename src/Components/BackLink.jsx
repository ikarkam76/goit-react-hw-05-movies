import { StyledLink } from "Components/BackLink.styled";

export const BackLink = ({to, children}) => {
    return (
        <StyledLink to={to}>
            {children}
        </StyledLink>
    )
}