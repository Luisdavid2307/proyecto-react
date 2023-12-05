import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function Publicacion() {

  const datapublicacion = [
    { id: 1, titulo: "Educación Financiera importancia e implicaciones", autor: "Mario Sanchez", fecha_publicacion: "Dic 3, 2023", seccion: "Economia" }
  ];

  const [data, setData] = useState(datapublicacion);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [publicacionSeleccionada, setpublicacionSeleccionada] = useState({
    id: '',
    titulo: '',
    autor: '',
    fecha_publicacion: '',
    seccion: ''
  });

  const seleccionarPublicacion = (elemento, caso) => {
    setpublicacionSeleccionada(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setpublicacionSeleccionada((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = [...data]; // Hacer una copia del array original para no modificarlo directamente
    dataNueva.forEach(publi => {
      if (publi.id === publicacionSeleccionada.id) {
        publi.titulo = publicacionSeleccionada.titulo;
        publi.autor = publicacionSeleccionada.autor;
        publi.fecha_publicacion = publicacionSeleccionada.fecha_publicacion;
        publi.seccion = publicacionSeleccionada.seccion;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }
  

  const eliminar = () => {
    setData(data.filter(publi => publi.id !== publicacionSeleccionada.id));
    setModalEliminar(false)
  }

  const abrirModalInsertar=()=>{
    setpublicacionSeleccionada(null);
    setModalInsertar(true);
  }

  const insertar=()=>{
    var valorInsertar=publicacionSeleccionada;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App">
      <h2 className='text-center'>Publicaciones cientificas</h2>
      <br/>
      <div className='text-center'>
      <button className='btn btn-success' onClick={()=>abrirModalInsertar()}>Insertar</button>
      </div>
      <br/><br/>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Fecha de publicacion</th>
            <th>Seccion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.titulo}</td>
              <td>{elemento.autor}</td>
              <td>{elemento.fecha_publicacion}</td>
              <td>{elemento.seccion}</td>
              <td><button className="btn btn-primary" onClick={() => seleccionarPublicacion(elemento, 'Editar')}>Editar</button> {"   "}
                <button className="btn btn-danger" onClick={() => seleccionarPublicacion(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Publicación</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={publicacionSeleccionada && publicacionSeleccionada.id}
            />
            <br />

            <label>Título</label>
            <input
              className="form-control"
              type="text"
              name="titulo"
              value={publicacionSeleccionada && publicacionSeleccionada.titulo}
              onChange={handleChange}
            />
            <br />

            <label>Autor</label>
            <input
              className="form-control"
              type="text"
              name="autor"
              value={publicacionSeleccionada && publicacionSeleccionada.autor}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de publicacion</label>
            <input
              className="form-control"
              type="date"
              name="fecha_publicacion"
              value={publicacionSeleccionada && publicacionSeleccionada.fecha_publicacion}
              onChange={handleChange}
            />
            <br />

            <label>Seccion</label>
            <input
              className="form-control"
              type="text"
              name="seccion"
              value={publicacionSeleccionada && publicacionSeleccionada.seccion}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Estás Seguro que deseas eliminar la publicación? {publicacionSeleccionada && publicacionSeleccionada.titulo}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Publicación</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length - 1].id + 1}
            />
            <br />

            <label>Título</label>
            <input
              className="form-control"
              type="text"
              name="titulo"
              value={publicacionSeleccionada ? publicacionSeleccionada.titulo : ''}
              onChange={handleChange}
            />
            <br />

            <label>Autor</label>
            <input
              className="form-control"
              type="text"
              name="autor"
              value={publicacionSeleccionada ? publicacionSeleccionada.autor : ''}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de publicación</label>
            <input
              className="form-control"
              type="text"
              name="fecha_publicacion"
              value={publicacionSeleccionada ? publicacionSeleccionada.fecha_publicacion : ''}
              onChange={handleChange}
            />
            <br />

            <label>Seccion</label>
            <input
              className="form-control"
              type="text"
              name="seccion"
              value={publicacionSeleccionada ? publicacionSeleccionada.seccion : ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
            onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Publicacion

