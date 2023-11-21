import React from 'react';
import { IoWalletOutline } from 'react-icons/io5';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { PiNotePencilThin } from 'react-icons/pi';

const PreFooter = () => {
    return (
        <section style={{ backgroundColor: '#649348' }} className='py-4'>
            <div className='container p-0'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0'>
                        <div className='d-flex justify-content-center align-items-center me-2'>
                            <div className='footer-background'>
                                <IoWalletOutline className='icon-prefooter' />
                            </div>
                            <div className='prefooter-content'>
                                <span className='text-white'>
                                    Dossiers in Regional, ACTD & CTD formats.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='footer-background'>
                                <CgNotes className='icon-prefooter' />
                            </div>
                            <div className='prefooter-content'>
                                <span className='text-white'>
                                    More than 700 product registrations across countries of our
                                    operations.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='footer-background'>
                                <PiNotePencilThin className='icon-prefooter' />
                            </div>
                            <div className='prefooter-content'>
                                <span className='text-white'>
                                    More than 800 product under registration.                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mb-3 mb-sm-0'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='footer-background'>
                                <AiOutlineFileSearch className='icon-prefooter' />
                            </div>
                            <div className='prefooter-content'>
                                <span className='text-white'>
                                    Plan to reach 1500 product registrations by the end of year
                                    2017.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreFooter