import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { enquiryDetails } from '../redux/features/enquiry_Slice';

const EnquirySection = ({ specificProduct }) => {
    const [addEnquir, setAddEnquir] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    })

    const [validationMessages, setValidationMessages] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    });

    const isValid = Object.values(validationMessages).every((status) => status === 'valid');

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setAddEnquir({
            ...addEnquir,
            [name]: value,
        });
        setValidationMessages({
            ...validationMessages,
            [name]: value.trim() ? 'valid' : 'invalid',
        });
    };

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: addEnquir.name,
            from_phone: addEnquir.number,
            from_email: addEnquir.email,
            to_name: 'Bst Career',
            message: addEnquir.message,
        }

        const isValid = Object.values(validationMessages).every((status) => status === 'valid');
        if (isValid) {
            setAddEnquir({
                name: '',
                number: '',
                email: '',
                message: '',
            });
            setValidationMessages({
                name: '',
                number: '',
                email: '',
                message: '',
            });

            toast.success('Thank You For Your Submission!', {
                position: toast.POSITION.TOP_CENTER
            });
            dispatch(enquiryDetails(templateParams));
        } else {
            setValidationMessages({
                name: addEnquir.name ? 'valid' : 'invalid',
                email: addEnquir.email ? 'valid' : 'invalid',
                number: addEnquir.number ? 'valid' : 'invalid',
                message: addEnquir.message ? 'valid' : 'invalid',
            });
        }
    };

    return (
        <div className="offcanvas offcanvas-start enquiry-img" tabIndex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div className="offcanvas-body enquiry-content">
                <button type="button" className="btn-close enquiry-btn" aria-label="Close"
                    data-bs-dismiss="offcanvas">
                </button>
                <h3 className="offcanvas-title" id="offcanvasExampleLabel">
                    Enquire Now
                </h3>
                <div className='enquiry-details mt-2'>
                    <p> For : {specificProduct?.name} </p>
                    <p> Quantity : 1 </p>
                </div>
                <hr className='text-white mt-4' />

                <form className='needs-validation'>
                    <div className="modal-body pt-1 text-white">
                        <div className="form-group mb-4">
                            <label className="form-label"> * Name <span> (required) </span> </label>
                            <input type="text" required value={addEnquir.name}
                                className={`form-control enquiry-field
                                              ${validationMessages.name === 'invalid' ? 'is-invalid' : ''}`
                                } onChange={handleChangeInput}
                                placeholder='Your Name' name='name'
                            />
                            <div className={validationMessages.name === 'invalid' ?
                                'invalid-feedback' : ''}
                            >
                                {validationMessages.name === 'invalid' ?
                                    ('Name is a required') : null
                                }
                            </div>
                        </div>

                        <div className="form-group mb-4">
                            <label className="form-label"> * Phone <span> (required) </span> </label>
                            <input type="number" required value={addEnquir.phone}
                                className={`form-control enquiry-field
                                              ${validationMessages.number === 'invalid' ? 'is-invalid' : ''}`
                                } onChange={handleChangeInput}
                                placeholder='Your Mob Number' name='number'
                            />
                            <div className={validationMessages.number === 'invalid' ?
                                'invalid-feedback' : ''}
                            >
                                {validationMessages.number === 'invalid' ?
                                    ('Mob Number is a required') : null
                                }
                            </div>
                        </div>

                        <div className="form-group mb-4">
                            <label className="form-label"> * Email <span> (required) </span> </label>
                            <input type="text" value={addEnquir.email} required
                                className={`form-control enquiry-field
                                              ${validationMessages.email === 'invalid' ? 'is-invalid' : ''}`
                                } onChange={handleChangeInput}
                                placeholder='Email-Id' name='email'
                            />
                            <div className={validationMessages.email === 'invalid' ?
                                'invalid-feedback' : ''}
                            >
                                {validationMessages.email === 'invalid' ?
                                    ('Email-Id is a required') : null
                                }
                            </div>
                        </div>

                        <div className="form-group mb-4">
                            <label className="form-label"> Enter your message here...(optional) </label>
                            <textarea value={addEnquir.message} required name='message'
                                rows="4" className={`form-control enquiry-field
                                              ${validationMessages.message === 'invalid' ? 'is-invalid' : ''}`
                                } onChange={handleChangeInput}
                                placeholder="Your Text Here..."
                            >
                            </textarea>
                            <div className={validationMessages.message === 'invalid' ?
                                'invalid-feedback' : ''}
                            >
                                {validationMessages.message === 'invalid' ?
                                    ('Message is a required') : null
                                }
                            </div>
                        </div>

                        <button onClick={handleSubmit} type="submit" data-bs-dismiss={isValid &&
                            validationMessages.name === 'valid' &&
                            validationMessages.number === 'valid' &&
                            validationMessages.email === 'valid' &&
                            validationMessages.message === 'valid' ? 'offcanvas' : ''
                        }
                            className="btn enquiry-button w-100 mb-4"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EnquirySection