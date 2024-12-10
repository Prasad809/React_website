import { Route, Routes, MemoryRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Loader from '../common-ui/Loader';




const UserSignIn=lazy(()=>import('../Pages/UserDetails/UserSign'))
const DashBoard=lazy(()=>import('../Pages/DashBoard/dashBoard'))
const UserRegisteration=lazy(()=>import('../Pages/UserDetails/UserRegister'))
const AddTrips=lazy(()=>import('../Pages/Home/AddTrips'));

function Routers() {
    
    return (
        <div>
            <MemoryRouter initialEntries={["/"]}>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='/' element={<UserSignIn />} />
                    <Route path='/register' element={<UserRegisteration />} />
                    <Route path='/dashboard' element={<DashBoard />} />
                    <Route path='/addTrip' element={<AddTrips />} />
                </Routes>
            </Suspense>
            </MemoryRouter>
        </div>
    )
}

export default Routers;