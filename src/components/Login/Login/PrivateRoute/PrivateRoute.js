import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import './PrivateRoute.css'
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="mt-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
    }
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
        </div>
    );
};

export default PrivateRoute;