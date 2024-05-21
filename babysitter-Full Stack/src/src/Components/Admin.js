// Added alt props to the img elements
import React from 'react';
import './Admin.css'; // Import the common CSS file
import img1 from '../imgs/b1.png';
import img2 from '../imgs/b2.png';
import img3 from '../imgs/b3.png';
import img4 from '../imgs/b4.png';
import { updatebabysitter } from '../Features/UserSliceupdate';

const images = [img1, img2, img3, img4];

// export const babysitters = () => {
// const [babysitterId, setbabysitterId] = useState('');
// const [name, setname] = useState('');
// const [age, setage] = useState('');
// const [price, setPrice] = useState('');
// const [place, setplace] = useState('');
// const [HomeNo, setHomeNo] = useState('');
  
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
  
//     const toggle = ( pbabysitterid) => {
//       setbabysitterID(pbabysitterid);
//     };
  
//      const handleUpdate = () => {
//        const pdata = {
//          pbabysitterId:  babysitterId,
//        };

//       dispatch(updatebabysitter(pdata));
//       dispatch(getbabysitters());
//       navigate("/home");
//     };
  
//     useEffect(() => {
//       dispatch(getbabysitters());
//     }, [babysitters]);
  
 
//   const handleDelete = (babysitterId) => {
//     dispatch(deleteBabysitter(babysitterId));
//     navigate("/home");
//   };
    
//       if (loading) {
//         return <p>Loading...</p>;
//       }
    
//       if (error) {
//         return <p>Error: {error}</p>;
//       }


function Admin() {
    return (
        <div>
          <div className="container-fluid py-5">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <Link to="/users" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
                  <h2>List Babysitter</h2>
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <Link to="/registerbabysitter" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
                  <h2>Add Babysitter</h2>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/updatebabysitter" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
                  <h2>Update Babysitter</h2>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/deletebabysitter" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
                  <h2>Delete Babysitter</h2>
                </Link>
              </div>
            </div>
          </div>
    
          <div className="container mt-4">
            <div className="row">
              {babysitters.map((babysitter) => (
                <div key={babysitter._id} className="col-md-4 mb-4">
                  <div className="card">
                    <img style={{ width: '50%', margin: '0 auto', paddingTop: '4px' }} src={images[Math.floor(Math.random() * images.length)]} className="card-img-top" alt="Babysitter" />
                    <div className="card-body">
                      <h5 className="card-title">{babysitter.name}</h5>
                      <p className="card-text">Age: {babysitter.Age}</p>
                      <p className="card-text">Price: ${babysitter.Price}</p>
                      <p className="card-text">Place: {babysitter.Place}</p>
                      <p className="card-text">House Number: {babysitter.Houseno}</p>
                      <Link to={`/updatebabysitter/${babysitter.babysitterid}`}>
                        <button
                          className="btn btn-primary mr-2"
                          onClick={() => handleUpdate(babysitter.babysitterid)}
                        >
                          Update
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(babysitter.babysitterid)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
export default Admin;
    

