import React from "react";

const Project = () => {
    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../assets/portfolio/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                // onClick={() => toggleModal(image, i)}
                key={image.name}
                />
            ))}
          </div>
        </div>
      );
};

export default Project;