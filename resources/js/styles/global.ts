import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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

	${({theme}) => css`
			/* ===== Scrollbar CSS ===== */
		/* Firefox */
		* {
			scrollbar-width: auto;
			scrollbar-color: ${theme.grey[400]} ${theme.grey[600]};
		}

		/* Chrome, Edge, and Safari */
		*::-webkit-scrollbar {
			width: 16px;
		}

		*::-webkit-scrollbar-track {
			background: ${theme.grey[600]};;
		}

		*::-webkit-scrollbar-thumb {
			background-color: ${theme.grey[400]};
			border-radius: 10px;
			border: 3px solid ${theme.grey[600]};;
		}

		.swal2-popup {
			color: ${theme.white[100]};
			background: ${theme.grey[600]};
			border-radius: 15px;
		}

		.swal2-deny {
			background: ${theme.red} !important;
		}
		.swal2-confirm {
			background: ${theme.blue} !important;
		}

		.swal2-confirm:focus {
			box-shadow: 0 0 0 0 #fff !important;
		}

		.swal2-deny:focus {
			box-shadow: 0 0 0 0 #fff !important;
		}

		.swal2-confirm:hover {
			filter: brightness(1.1);
		}
		.swal2-deny:hover {
			filter: brightness(1.1);
		}
	`}
`

export const Form = styled.form`
	margin-top: 30px;
	width: 70%;
	display: flex;
	flex-direction: column;
	@media (max-width: 1024px) {
		width: 100%;
  }
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

		@media (max-width: 1024px) {
			padding: 0 8%;
		}

		div {
				flex-direction: column;
				display: flex;
				width: 100%;
		}
	`};
`;

export const ImgAuth = styled.img`
	@media (max-width: 1024px) {
    display: none;
  }
`;