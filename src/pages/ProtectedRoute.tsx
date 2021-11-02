import {Route, Redirect, RouteProps} from 'react-router';
import {useAppSelector} from 'store';

interface Props extends RouteProps {
  Component: React.ComponentType<any>;
}

export default function ProtectedRoute({Component, ...props}: Props) {
  const isLoggedIn = useAppSelector((state) => !!state.auth.sessionKey?.length);
  return <Route {...props} render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)} />;
}
