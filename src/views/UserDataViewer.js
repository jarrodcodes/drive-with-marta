import React, { Component } from 'react';

class UserDataViewer extends Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        let self = this;

    }

    componentDidUpdate() {
    }

    componentWillReceiveProps(nextProps) {
        let self = this;
        if (self.props.GPS) {
            self.forceUpdate()
        }
}

    render() {

        let self = this;
        console.log('I am UserDataViewer state', self.state);
        console.log('I am UserDataViewer props', self.props);

        return (
            <div>
                {
                    self.props.GPS[0] &&

                    <p>
                       This is {self.props.GPS[0].length}
</p>
                }
            </div>
        )
    }
}
export default (UserDataViewer);