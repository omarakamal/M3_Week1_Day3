const projects = [
    { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
    { _id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
    { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
    { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
  ];

  function ProjectList(){
    return (
        <div className="list">
          <h2>Project List</h2>
            {projects.map((individualProject)=>{
                return(
                    //key is always in the opening tag of my return in the map method
                  <div key={individualProject._id}>
                    <h1>{individualProject.techStack}</h1>
                    <h2>{individualProject.name}</h2>
                  </div>  
                )
            })}
    
        </div>
      );
  }

  export default ProjectList