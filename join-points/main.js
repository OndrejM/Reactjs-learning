// tutorial1.js

/*
  @param React from ReactJS
  @param marked from marked
  @param ajax Ajax helper object, contains method ajax.request, which has same semantics as $.ajax in jquery
*/
(function (React, Ajax) {
    
    var c = components();

    React.render(
      <c.Panel className="main"/>,
      document.getElementById('content')
    );

    function components() {
        var c = {
            /*  @prop className: String - html class attribute
            */
            Panel: React.createClass({
                getInitialState: function() {
                    return {elements: [1,2,3]};
                  },
                componentDidMount: function() {
                  },                
                render: function() {
                    return (
                        <div className={this.props.className}>
                          <ul>
                          {this.state.elements.map(e => 
                              <li>
                                {e}
                              </li>
                          )}
                          </ul>
                        </div>
                    );
                }
            }),
            
        };
        return c;
    }

})(React, {request: $.ajax});