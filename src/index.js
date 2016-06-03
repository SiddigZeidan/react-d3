var React = require('react'),
        _ = require('lodash'),
        d3 = require('d3');


var H1BGraph = React.createClass({
  componentWillMount: function () {
    this.loadRawData();
  },

  getInitialState: function () {
    return {rawData: []};
  },

  loadRawData: function (){
  
    d3.csv(this.props.url)
      .get(function (error, rows){
        if(error) {
          console.error(error);
          console.error(error.stack);
        }else{
          this.setState({rawData: rows});
        }
      }.bind(this));
  },

  render: function() {
    return (
      <div className='row'>
        <div className='col-md-12'>
            <svg width='700'
                height = '500'>
            </svg>
        </div>
      </div>
    )
  }
})


React.render(
  <H1BGraph url ="data/h1bs.csv" />,
  document.querySelectorAll('.h1bgraph')
  [0]
);
