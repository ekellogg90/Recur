import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SIGNUP_USER = gql`
    mutation signup($username: String!, $password: String!, $avatar: String) {
        signup(username: $username, password: $password, avatar: $avatar) {
            token
            user {
                _id
                username
                avatar
            }
        }
    }
`;

export const ADD_EVENT = gql`
    mutation addEvent($_id: ID) {
        addEvent(_id: $_id) {
            _id
            username
            events
        }
    }
`;
