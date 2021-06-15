import React from 'react';

class DeveloperProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(`/api/developers/${this.props.match.params.developerId}`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({ developer: response });
            });
    }

    render() {
        const { developer } = this.state;
        return <div>Developer data: {JSON.stringify(developer)}</div>;
    }
}

export default DeveloperProfile;
