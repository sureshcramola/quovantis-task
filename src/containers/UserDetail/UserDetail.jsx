import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Card } from 'react-bootstrap';
import get from 'lodash/get';
import Loader from '../../components/Loader/Loader';
import { getUserDetail } from './actions';
import "./user-detail.scss";

const UserDetail = (props) => {
    const { match } = props;
    const { userDetail } = useSelector(state => state);

    const dispatch = useDispatch();
    const userId = get(match, 'params.id');

    useEffect( () => {
        dispatch(getUserDetail(userId))
    }, [])

    return (
        <div className="user-detail-wrapper">
            <Card>
                <Card.Body>
                    <div className="user-img">
                        <img src={userDetail.data.avatar} alt="user-img" />
                    </div>
                    <Card.Title className="user-name">{userDetail.data.first_name +' '+ userDetail.data.last_name}</Card.Title>
                    <Card.Text>
                        <span className="bold-text">Co-founder</span> & <span className="bold-text">CEO</span> at <span className="bold-text">{userDetail.ad.company}</span></Card.Text>
                    <p className="sm-text">( {userDetail.ad.text} )</p>
                    <div className="user-contact-info">
                        <span><FontAwesomeIcon icon={faPhone} /> +17899048786</span>
                        <span><FontAwesomeIcon icon={faEnvelope} /> {userDetail.data.email}</span>
                    </div>
                </Card.Body>
            </Card>
            <Loader isShowLoader={userDetail.isLoading}/>
        </div>
    )
}

export default UserDetail;