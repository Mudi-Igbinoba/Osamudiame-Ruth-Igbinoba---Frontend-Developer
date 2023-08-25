import Moment from 'react-moment';
import Modal from 'react-modal';
import { BsXCircleFill } from 'react-icons/bs';

Modal.setAppElement('#root');

const CapsuleModal = ({ selectedItem, setSelectedItem }) => {
    const closeModal = () => {
        setSelectedItem(null);
    };
    return (
        <Modal
            isOpen={!!selectedItem}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    transition: '300ms',
                },
                content: {
                    backgroundColor: '#111',

                    border: '1px solid #fff',
                    borderRadius: '8px,',
                    transition: '300ms',
                },
            }}>
            {/* Render selected item details in the modal */}
            {selectedItem && (
                <div className='text-white font-robotoSlab pb-5'>
                    {/* Display item details */}
                    <button onClick={closeModal} className='ml-auto block'>
                        <BsXCircleFill className='text-3xl text-white' />
                    </button>

                    <h2 className='font-orbitron font-bold sm:text-4xl text-3xl mt-4 mb-8 text-center '>
                        Capsule: {selectedItem.capsule_serial}
                    </h2>
                    <section className='grid gap-x-4 gap-y-11 xl:grid-cols-3 sm:grid-cols-2 text-center mx-auto capitalize font-light'>
                        <p>
                            <span className='inline-block mb-2 font-orbitron font-medium text-lg tracking-wider'>
                                Status
                            </span>
                            <br />

                            {selectedItem.status ? selectedItem.status : '-'}
                        </p>
                        <p>
                            <span className='inline-block mb-2 font-orbitron font-medium text-lg tracking-wider'>
                                Original Launch
                            </span>
                            <br />

                            {selectedItem.original_launch ? (
                                <Moment format='LLL'>
                                    {selectedItem.original_launch}
                                </Moment>
                            ) : (
                                '-'
                            )}
                        </p>

                        <p>
                            <span className='inline-block mb-2 font-orbitron font-medium text-lg tracking-wider'>
                                Reuse Count
                            </span>
                            <br />

                            {selectedItem.reuse_count
                                ? selectedItem.reuse_count
                                : '0'}
                        </p>

                        <p>
                            <span className='inline-block mb-2 font-orbitron font-medium text-lg tracking-wider'>
                                Landings
                            </span>
                            <br />
                            {selectedItem.landings
                                ? selectedItem.landings
                                : '0'}
                        </p>
                        <p>
                            <span className='inline-block mb-2 font-orbitron font-medium text-lg tracking-wider'>
                                Type
                            </span>
                            <br /> {selectedItem.type ? selectedItem.type : '-'}
                        </p>
                        <p>
                            <span className='inline-block mb-2 font-orbitron font-medium text-lg tracking-wider'>
                                Details
                            </span>
                            <br />{' '}
                            <span className='normal-case'>
                                {selectedItem.details
                                    ? selectedItem.details
                                    : '-'}
                            </span>
                        </p>
                        <div>
                            <p className='inline-block mb-2 font-orbitron font-medium text-lg tracking-wider'>
                                Missions
                            </p>
                            <br />

                            {selectedItem.missions.length > 0
                                ? selectedItem.missions.map((item, index) => (
                                      <div
                                          key={item.name}
                                          className='mb-4 normal-case'>
                                          {(index += 1)}.
                                          <br />
                                          <p>
                                              <span className='inline-block mb-2  font-medium tracking-wider'>
                                                  Name:
                                              </span>{' '}
                                              {item.name}
                                          </p>
                                          <p>
                                              <span className='inline-block mb-2 font-medium tracking-wider'>
                                                  Flight:
                                              </span>{' '}
                                              {item.flight}
                                          </p>
                                      </div>
                                  ))
                                : '-'}
                        </div>
                    </section>
                </div>
            )}
        </Modal>
    );
};

export default CapsuleModal;
