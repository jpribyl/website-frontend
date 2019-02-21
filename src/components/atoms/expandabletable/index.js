//@format
import React, {Component} from 'react';
import ReactTable from 'react-table';

export default class ExpandableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded
    };
  }

  componentWillReceiveProps(props) {
    if (props.expanded) {
      this.setState({expanded: props.expanded});
    }
  }

  expand_row(row) {
    if (this.props.handleExpand) {
      this.props.handleExpand(row);
    } else {
      //there is a bug in this package... row index resets per page..
      //so if you expand the n'th row on page 1 then it will stay expanded on
      //page 2. To fix this, I use viewIndex (relative index) and the
      //onPageChange to collapse all rows on page change
      //console.log('row: ', row);
      var expanded = {...this.state.expanded};
      if (expanded[row.viewIndex]) {
        expanded[row.viewIndex] = !expanded[row.viewIndex];
      } else {
        expanded[row.viewIndex] = true;
      }

      this.setState({
        expanded: expanded
      });
    }
  }

  render() {
    //console.log('state: ', this.state, 'props: ', this.props);
    let noDataText;
    if (this.props.loading) {
      noDataText = '';
    } else {
      noDataText = 'No data available';
    }

    return (
      <ReactTable
        {...this.props}
        className={'reactTableStyle ' + this.props.className}
        expanded={this.state.expanded}
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: e => {
              this.expand_row(rowInfo);
            }
          };
        }}
        getTrProps={(state, rowInfo, column, instance) => {
          return {
            id:
              this.state.expanded && this.state.expanded[rowInfo.index]
                ? 'active'
                : 'inactive'
          };
        }}
        SubComponent={u => {
          return (
            <div className="padSubComponent">{u.original.subcomponent}</div>
          );
        }}
        minRows={0}
        noDataText={noDataText}
        showPageSizeOptions={false}
        onPageChange={() => {
          this.setState({expanded: null});
        }}
      />
    );
  }
}

//columns={this.props.columns}
//data={this.props.data}
//manual={this.props.manual}
//loading={this.props.loading}
//style={style}
//expanded={this.state.expanded}
//showPagination={this.props.showPagination}
//onSortedChange={this.props.onSortedChange}
//SubComponent={d => {
//return this.props.SubComponent(d);
//}}
