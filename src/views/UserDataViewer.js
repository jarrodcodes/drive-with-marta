import React, { Component } from 'react';
import _ from 'lodash';
class UserDataViewer extends Component {

    constructor(props) {
        super(props)

    }

    componentWillMount(nextProps) {
        let self = this;
        if (self.props.GPS) {
            self.forceUpdate()
        }
    }

    componentDidUpdate() {
    }

    componentWillReceiveProps(nextProps) {
        let self = this;
        console.log(_.size(nextProps.GPS[0]))
        console.log(nextProps)
        if ((_.size(nextProps.GPS[0])) > 0) {
           // self.forceUpdate()
        }
}

    render() {

        let self = this;
        //console.log('I am UserDataViewer state', self.state);
        //console.log('I am UserDataViewer props', self.props);

        return (
            <div>
                {
                    self.props.GPS[0] &&

                    <p>
                       This is {self.props.GPS[0][1]}
</p>
                }
            </div>
        )
    }
}
export default (UserDataViewer);