import React from 'react'

const Users = ({Loading,users}) => {
    return Loading ? ( 
        <div id="main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading.."></img>
        </div>
    ) :
    (
        <div className='row' id="main">
            {
                users.map(user =>
                    <div className="col-sm-6 col-md-4">
                        <div className="profile">
                            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                            <h1 className="name">{user.first_name} {user.last_name}</h1>
                            <p className="email">{user.email}</p>
                            <p> User ID: {user.id}</p>
                            </div>
                            </div>
                            )
            }
        </div>
    )
}

export default Users;