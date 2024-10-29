/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name, email, phone,id} = user;
    return (
        <div className="border-2 py-2 px-3 rounded-xl border-yellow-600">
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`user/${id}`}>Show Detail</Link>
        </div>
    );
};

export default User;