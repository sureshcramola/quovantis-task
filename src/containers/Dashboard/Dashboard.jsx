import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Pagination } from 'react-bootstrap';
import { getUsersList } from './actions';
import Loader from '../../components/Loader/Loader';
import "./dashboard.scss";

const Dashboard = (props) => {
    const [pageNo, setPageNo] = useState(1)
    const {users} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getUsersList(pageNo))
    }, [pageNo])

    
    const renderTableData = () => {
        return users.userData.map(user => {
            return (
                <tr key={user.id} onClick={() => props.history.push(`/user/${user.id}`)}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                </tr>
            )
        })
    }
    

    const renderPagination = () => {
        let items = [];
        for (let number = 1; number <= users.total_pages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === users.page} onClick={() => setPageNo(number)}>
                    {number}
                </Pagination.Item>
            );
        }
        return items
    }

    return (
        <div className="dashboard-wrapper">
            <h1>Users List</h1>
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </Table>
            <Pagination className="justify-content-center">
                {renderPagination()}
            </Pagination>
            <Loader isShowLoader={users.isLoading}/>
        </div>
    )
}

export default Dashboard;