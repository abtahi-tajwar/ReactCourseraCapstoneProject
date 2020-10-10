import React, { Component } from "react"

class DishDetail extends Component
{
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
}
export default DishDetail