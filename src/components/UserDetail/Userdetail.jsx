import { useLoaderData } from 'react-router-dom';

const Userdetail = () => {
    const user = useLoaderData()
    console.log(user);
    const {name, email,website, address , company} = user;
    return (
        <div className='w-1/2 mx-auto text-center'>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{website}</h2>
            <h2>{address.city}</h2>
            <h2>{company.name}</h2>
        </div>
    );
};

export default Userdetail;