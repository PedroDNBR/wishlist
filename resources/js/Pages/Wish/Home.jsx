import { Inertia } from "@inertiajs/inertia";
import React from "react";

function logout() {
	Inertia.delete('/users/logout')
}

export default function Home({ errors }) {
	return (
		<>
			<button onClick={logout}>Loguot</button>
		</>
	)
}
