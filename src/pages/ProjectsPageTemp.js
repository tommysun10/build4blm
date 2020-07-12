import React from 'react';
import '../styling/ProjectsPageTemp.css';
import {Button} from 'react-bootstrap';

const ProjectsPageTemp = () => (
  <div className="container mt-5">
    <div className="row d-flex justify-content-center text-center">
      <div className="col-md-8">
        <h1 className="mt-5">Projects Coming Soon</h1>
        <p> We are in the process of reviewing projects and will be posting projects shortly.
            Check back in a couple weeks to see newly added projects.
        </p>
        <Button href="http://eepurl.com/g9JPtn" className="primary-button mt-5" size="lg"
                target="_blank" aria-disabled="false" rel="noopener noreferrer">
                    Notify Me About Projects
        </Button>
      </div>
  </div>
  </div>
);

export { ProjectsPageTemp };
