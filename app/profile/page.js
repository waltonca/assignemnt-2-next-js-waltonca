import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';

export const revalidate = 0

// Server Action
async function saveUser(data) {
    'use server'
    const id = data.get('id');
    const firstname = data.get('firstname');
    const lastname = data.get('lastname');
    const email = data.get('email');
    // to-do: save the user to the database OR post to API
    
    // You can then change the values in the form and save. The record in the database should then be updated.
    // So use Update user info in Vercel
    await sql`UPDATE assign2 SET firstname = ${firstname}, lastname = ${lastname}, email = ${email} WHERE id = ${id};`;

    // reload the page after saving，so that the form is updated with the new values
    redirect('/profile');
}

// Get user from Vercel table in Vercel and display in form, For the assign, only need 1 record.
async function getUser(){
    const { rows } = await sql`SELECT id, firstname, lastname, email FROM assign2 ORDER BY id LIMIT 1;`; 
    console.log(rows);
    return rows[0]; // return the first row
}

export default async function Profile() {
    const user = await getUser();

    return (
        <>
            <h2>Profile page</h2>
            <form action={saveUser}>
                <input type="hidden" name="id" value={user.id} />
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input name="firstname" type="text" placeholder="firstname" className="form-control" defaultValue={user.firstname} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input name="lastname" type="text" placeholder="lastname" className="form-control" defaultValue={user.lastname} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" type="text" placeholder="email" className="form-control" defaultValue={user.email} required />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            {/*- 
            select that 1 record and display the values in a <form> on the web page
            <h2>Users:</h2>
            {
                usersNames.map((row) => (
                    <div key={row.id}>{row.firstname}</div>
                ))
            }
             */}
        </>
    );
}