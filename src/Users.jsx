import React, { useContext, useRef, useState } from 'react'
import { UserContext } from './context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Table } from 'react-bootstrap';

const Users = () => {
    // We have to destructure with the same name as used in provider.
    let { users, addUser, delUser,updateUser } = useContext(UserContext)

    let nameRef = useRef(null)
    let ageRef = useRef(null)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const [update, setUpdate] = useState(false)


    // Below function is used for edit, this function takes the object of that user on which we have clicked on.Here nameref and ageref is to referenced the name and age input and filled the input with the current targeted data
    let handleEdit = (user) => {
        setUpdate(true)
        setCurrentID(user.id)
        setCurrentAge(user.age)
        setCurrentName(user.name)
        nameRef.current.value=user.name
        ageRef.current.value=user.age

    }

    let handleUsers = (e) => {
        e.preventDefault()
        let id = Date.now()
        let user = { id, name, age }
        addUser(user)
        nameRef.current.value = ""
        ageRef.current.value = ""
    }

    let handleUpdate=(e)=>{
        e.preventDefault()
        updateUser(currentID,currentName,currentAge)
    }
    const[currentID,setCurrentID]=useState(null)
    const[currentName,setCurrentName]=useState(null)
    const[currentAge,setCurrentAge]=useState(null)
   
 
    return (
        <Container>
            <h1 className='text-center bg-danger '>
                CONTEXT API CRUD PROCESS
            </h1>
            {update ? (
                <Form onSubmit={handleUpdate}>
                    <Form.Group>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control
                            onChange={(e) => setCurrentName(e.target.value)}
                            ref={nameRef} type='text' placeholder='Enter name' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Age
                        </Form.Label>
                        <Form.Control
                            onChange={(e) => setCurrentAge(e.target.value)}
                            ref={ageRef} type='number' placeholder='Enter age' />
                    </Form.Group>
                    <br />
                    <Button type='submit'>Update user</Button>
                </Form>
            ) : (
                <Form onSubmit={handleUsers}>
                    <Form.Group>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            ref={nameRef} type='text' placeholder='Enter name' />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Age
                        </Form.Label>
                        <Form.Control
                            onChange={(e) => setAge(e.target.value)}
                            ref={ageRef} type='number' placeholder='Enter age' />
                    </Form.Group>
                    <br />
                    <Button type='submit'>Add user</Button>
                </Form>
            )}

            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Delete User</th>
                        <th>Edit User</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((u) => (
                        <tr>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.age}</td>
                            <td><Button onClick={() => delUser(u.id)}>Delete</Button></td>
                            <td><Button onClick={()=>handleEdit(u)}>Edit</Button></td>
                        </tr>
                    ))}
                </tbody>

            </Table>

        </Container>
    )
}

export default Users