import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AppointmentTest = ({ test, date, setTest }) => {
    const {_id, name, slots } = test;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.traget.slot.value;
        console.log(_id, name,slot);
        setTest(null)
    }
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-3 mt-5'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =><option key={index} value={slot}>{slot}</option> )
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary input input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentTest;