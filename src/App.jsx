import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';

function App() {
	const [users, getUsers, createUser, deleteUser, updateUser] =
		useCrud('/users/');

	useEffect(() => {
		getUsers();
	}, []);

	console.log(users);

	return (
		<div>
			<h1>Users CRUD</h1>
			<FormUser />
		</div>
	);
}

export default App;
