import React from 'react';
import DropZone from 'react-dropzone';

export default class Dropzone extends React.Component {
  state = {
        files: [],
        uploading: null,
  };

  render() {
    const { files, uploading } = this.state;
    return (
            <div>
                <h3>Drop Zone (Upload Your Image here)</h3>
                <DropZone onDrop={this.onDrop}>
          <div>
            Drop Files Here <br />{' '}
            <button className="button link">Upload</button>
          </DropZone>
            </div>
        )
    }
}
