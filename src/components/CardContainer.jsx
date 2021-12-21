import React from "react";

class CardContainer extends React.Component {
  render() {
    const { containerId, image, name } = this.props.containerData;
    const cardData = [
      { name: "Docker Id", value: containerId },
      { name: "Name", value: name },
      { name: "Image", value: image },
    ];

    return (
      <div className="card">
        {cardData.map((data) => (
          <div>
            <span>{data.name}</span>
            <span>{data.value}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default CardContainer;
