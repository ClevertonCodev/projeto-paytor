import Link from 'next/link';
import { Container } from 'react-bootstrap';
import {JournalBookmarkFill, EnvelopeFill, Github, Linkedin} from 'react-bootstrap-icons';


export default function  Footer() {
    return (
      <footer className=" footer mt-5">
        <Container>
              <div className="d-flex mx-auto mt-3">
                  <Link href='https://www.clevertonsantos.com' className="me-3" target="_blank" rel="noopener noreferrer" > 
                  <JournalBookmarkFill className='socialite' />
                  </Link> 

                  <Link href= "mailto:clevertonsantoscodev@gmail.com" className="me-3" > 
                  <EnvelopeFill className='socialite' />
                  </Link> 

                  <Link href="https://github.com/ClevertonCodev" target="_blank" rel="noopener noreferrer" className="me-3" > 
                  <Github className='socialite' />
                  </Link> 
      
                  <Link href="https://www.linkedin.com/in/cleverton-santos-5548a1233/" target="_blank" rel="noopener noreferrer" className="me-3" > 
                  <Linkedin className='socialite' />
                  </Link>
              </div>
              
            <div className='rodape'>
            <p className='text-center'>&copy; 2023 made by: Cleverton Santos </p>
            </div>
        </Container>
      </footer>
    );
  }
  