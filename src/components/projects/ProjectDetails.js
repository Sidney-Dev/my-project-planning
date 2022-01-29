const ProjectDetails = ({match}) => {

    const id = match.params.id

    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - { id }</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quos dicta similique soluta eveniet delectus asperiores accusamus. Dolorum aspernatur veniam nobis minus, repudiandae soluta, perferendis quae harum magni ut omnis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Sidney</div>
                    <div>1 April</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;