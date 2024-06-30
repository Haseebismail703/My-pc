import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Navi(prop) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // cart <details></details>

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(prop.products);
      }, [prop])
  
    const incrementQuantity = (id) => {
      const updatedProducts = products.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    };
  
    const decrementQuantity = (id) => {
      const updatedProducts = products.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    };
  
    const removeFromCart = (id) => {
      const updatedProducts = products.filter(item => item.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    };
  
    const calculateTotalPrice = () => {
      return products.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button variant="primary" onClick={handleShow} className="me-2">
        Cart
      </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart detail</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <center>

            
          {products.map((item, index) => (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => incrementQuantity(item.id)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => decrementQuantity(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button> <br /><br />
        </div>
      ))}
      <h5>Total price: ${calculateTotalPrice()}</h5>
      </center>
        </Offcanvas.Body>
      </Offcanvas>
    
     
     
      
   
    
    
    
    
    
    </>
  );
}

export default Navi;