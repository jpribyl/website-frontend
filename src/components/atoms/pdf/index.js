import React, { Component } from "react"
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class PDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    scale: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  componentDidMount() {
    this.resize()
    window.addEventListener("resize", this.resize)
  }

  resize = () => {
      let width
      if (window.innerWidth >= 900) {
          width = window.innerWidth*.6
      }
      this.setState({width: width})
  }

  render() {
    const { pageNumber, numPages } = this.state

    return (
      <div className={this.props.className} style={{ ...this.props.style }}>
        <Document
          loading={this.props.loading}
          file={this.props.src}
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError={console.error}>
          <Page width={this.state.width} pageNumber={pageNumber} />
        </Document>
      </div>
    )
  }
}

export default PDF
