import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { PublicRoutes, PrivateRoutes, AppRoutes } from '../app';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={
                    <PublicRoutes>
                        <LoginPage />                                         
                    </PublicRoutes>
                } />

                <Route path='/*' element={
                    <PrivateRoutes>
                        <AppRoutes />
                    </PrivateRoutes>
                } />
            </Routes>
        </>
    )
}
