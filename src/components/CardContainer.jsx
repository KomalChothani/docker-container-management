import React from "react";

class CardContainer extends React.Component {
  render() {
    const {
      containerData: { containerId, image, name },
      firstBtn,
      secondBtn,
    } = this.props;

    const cardData = [
      { name: "Docker Id", value: containerId },
      { name: "Name", value: name },
      { name: "Image", value: image },
    ];

    return (
      <div className="card">
        {cardData.map((data) => (
          <div>
            <span data-testid='data-name'>{data.name}</span>
            <span>{data.value}</span>
          </div>
        ))}

        {firstBtn && (
          <button onClick={() => firstBtn.callBack(containerId)}>
            {firstBtn.name}
          </button>
        )}
        {secondBtn && (
          <button onClick={() => secondBtn.callBack(containerId)}>
            {secondBtn.name}
          </button>
        )}
      </div>
    );
  }
}

export default CardContainer;
