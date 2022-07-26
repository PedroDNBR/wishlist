import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@media (max-width: 1080px) {
      html: {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html: {
        font-size: 87.5%;
      }
		}
`

export const Form = styled.form`
	margin-top: 30px;
	width: 70%;
	display: flex;
	flex-direction: column;
`;

export const FluidContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		min-height: 100vh;
		background: ${theme.grey[600]};
		padding: 0 12.5%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		div {
				flex-direction: column;
				display: flex;
				width: 100%;
		}
	`};
`;

export const ImgAuth = styled.img`
`;