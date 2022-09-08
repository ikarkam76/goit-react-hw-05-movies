import { StyledLink } from "Components/BackLink/BackLink.styled";
import PropTypes from 'prop-types';

export const BackLink = ({to, children}) => {
    return (
        <StyledLink to={to}>
            {children}
        </StyledLink>
    )
}

BackLink.propTypes = {
    to: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
}