import React from "react";

function logout() {
	Inertia.delete('/users/logout', data)
}

export default function Home({ errors }) {
	return (
		<>
			<button onClick={logout}>Loguot</button>
		</>
	)
}
