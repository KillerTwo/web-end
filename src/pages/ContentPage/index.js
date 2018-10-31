import React from 'react';

class ContentPage extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default ContentPage;