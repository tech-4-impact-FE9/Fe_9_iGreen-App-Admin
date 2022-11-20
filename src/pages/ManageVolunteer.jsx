import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/ManageStyle.css'
import {useDispatch, useSelector} from 'react-redux'
import { deleteData, getData, updateData } from '../redux/action/manajemenRelawanAction'

function ManageVolunteer () {
    const [dataRelawan, setDataRelawan] = useState("")
    const [statusActive, setStatusActive] = useState("")
    const [idData, setIdData] = useState("")

    const dispatch = useDispatch()
    const {relawanPendaftar, isLoading} = useSelector((state) => state.dataRelawan)

    const delete_Data = (id) =>{
        let text = "Apakah anda yakin untuk menghapusnya?"
        if (confirm(text) == true) {
            dispatch(deleteData(id))
        }else{
            alert("Action Cenceled")
        }
    }

    const handleSaveEdit = (id) => {
        dispatch(updateData(id, statusActive))
        alert("data berhasil di update")
    }
    
    useEffect(() => {
        dispatch(getData())
    },[])
    return(
        <>
        <div className='d-flex'>
            <Sidebar/>
            <div id='group'>
            <nav className="search-nav navbar navbar-light">
                <div className="container-fluid justify-content-end">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="manage-table container mt-5">
                <div className="table-card card flex-grow-1 container-p-y">
                    <h5 className="card-header">Data Pendaftar Relawan</h5>
                    <div className="table-card-body card-body">
                        <button className='btn btn-info'><i className="fas fa-plus"></i> Tambah Data</button>
                        <div className="table-responsive">
                            <table id="data-table" className="table table-striped table-hover">
                                <thead>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">ID Event</th>
                                    <th scope="col">Name Event</th>
                                    <th scope="col">Link Document</th>
                                    <th scope="col">No. Handphone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Reason</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </thead>
                                <tbody className="row-data">
                                    {isLoading ?(
                                            <span>Loading...</span>
                                        ) : (
                                            relawanPendaftar.map((item) => 
                                                <tr key={item.id}>
                                                    <th>{item.id}</th>
                                                    <td>{item.nama}</td>
                                                    <td>{item.id_event}</td>
                                                    <td className="text-wrap">{item.name_event}</td>
                                                    <td className="text-wrap">
                                                        Link ID Card: {item.link_IDCard}
                                                        <br/>
                                                        Link Student Card: {item.link_studentCard}
                                                        <br/>
                                                        Link Cv: {item.link_cv}
                                                        <br/>
                                                        Link Health Letter: {item.link_HealthLetter}
                                                    </td>
                                                    <td>{item.nomor_telepon}</td>
                                                    <td>{item.email}</td>
                                                    <td className="text-wrap">{item.reason}</td>
                                                    <td id="show-status">
                                                        {item.status}
                                                    </td>
                                                    <td >
                                                        <input className="btn btn-warning mb-3" type="button" value="Edit" onClick={() => handleSaveEdit(item.id)}/>
                                                        <input className="btn btn-danger" type="button" value="Delete" onClick={() => delete_Data(item.id)}/>
                                                    </td>

                                                    {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div class="form-check">
                                                                    <input type="radio" value={"accepted"} onChange={(e) => setStatusActive(e.target.value)} /> accepted
                                                                </div>
                                                                <div class="form-check">
                                                                    <input type="radio" value={"being processed"} onChange={(e) => setStatusActive(e.target.value)}/> being processed
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-primary" onClick={() => handleSaveEdit(item.id)}>Save changes</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </tr>
                                            )
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>   
    </div>    
    </>
    )
}

export default ManageVolunteer