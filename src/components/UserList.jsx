import ContactCard from "./ContactCard";

function UserList({users}) {
    return (
        <div className="user-list">
            {users.map((user) => (
                <ContactCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                />
            ))}
        </div>
    );
}

export default UserList;