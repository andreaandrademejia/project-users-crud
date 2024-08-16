const UserCard = ({ user }) => {
	return (
		<articule>
			<img src={user.image_url} alt={'${user.first_name}${user.last_name}'} />
			<h3>
				{user.first_name} {user.last_name}
			</h3>
			<hr />
			<ul>
				<li>
					<span>Email:</span>
					<span>{user.email}</span>
				</li>
				<li>
					<span>Birthday</span>
					<span>{user.birthday}</span>
				</li>
			</ul>
			<footer>
				<button>Delete</button>
				<button>Edit</button>
			</footer>
		</articule>
	);
};

export default UserCard;
