import React, {Component} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({numPages});
  };

  render() {
    const {pageNumber, numPages} = this.state;

    return (
      <div className={this.props.className} style={{...this.props.style}}>
        <Document
          file={this.props.src}
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError={console.error}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default PDF;
