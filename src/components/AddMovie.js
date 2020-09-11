import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Input,FormGroup,Label,} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import Rating from './Rating';
const AddMovie = (props) => {
  const {
    addmovie,
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [name,setName]=useState('');
  const [rate,setRate]=useState('');
  const [image,setImage]=useState('');
  const [date,setDate]=useState('');
  const add=(e)=>{
  let newMovie={id: uuidv4(),name,image,date,rate}
  if (newMovie.image && 
    newMovie.name &&
    newMovie.date &&
    newMovie.rate
    ){
    addmovie(e,newMovie);
    toggle();
    setName('');
    setRate('');
    setImage('');
    setDate('');
    } else {alert("All fields are mandatory!" )}
  }

  return (
    <div>
      <Button color="success" onClick={toggle}>Add Movie{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add new movie</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label >Name:</Label>
        <Input type="text" name="name" id="name" placeholder="Enter name of movie" value={name} onChange={e=>setName(e.target.value)}/>
        <Label >Date:</Label>
        <Input type="text" name="date" id="date" placeholder="Enter Date of movie" value={date} onChange={e=>setDate(e.target.value)}/>
        <Label >Image:</Label>
        <Input type="text" name="image" id="image" placeholder="Give the url of image movie" value={image} onChange={e=>setImage(e.target.value)}/>
        </FormGroup>
        <FormGroup>
        <Label >Rating:</Label>
      <Rating rate={rate} />
        <Input type="text" name="rate" id="image" placeholder="Give the url of image movie" value={rate} onChange={e=>setRate(e.target.value)}/>
    
        
      </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={add}>ADD MOVIE</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddMovie;