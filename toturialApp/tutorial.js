// tutorial1.js

/*
  @param React from ReactJS
  @param marked from marked
  @param ajax Ajax helper object, contains method ajax.request, which has same semantics as $.ajax in jquery
*/
(function (React, marked, Ajax) {
    
    var c = components();

    React.render(
      <c.CommentBox url="server/comments.php"/>,
      document.getElementById('content')
    );

    function components() {
        var c = {
            /*  @prop url: String - url of data service endpoint
            */
            CommentBox: React.createClass({
                getInitialState: function() {
                    return {data: []};
                  },
                componentDidMount: function() {
                    Ajax.request({
                      url: this.props.url,
                      dataType: 'json',
                      cache: false,
                      success: function(data) {
                        this.setState({data: data});
                      }.bind(this),
                      error: function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                      }.bind(this)
                    });
                  },                
                render: function() {
                    return (
                        <div className="commentBox">
                            <h1>Comments</h1>
                            <c.CommentList data={this.state.data}/>
                            <c.CommentForm />
                        </div>
                    );
                }
            }),
            
            /*  @prop data: Object - model
            */
            CommentList: React.createClass({
                render: function() {
                    return (
                      <div className="commentList">
                        {this.props.data.map(comment => 
                            <c.Comment author={comment.author}>
                                {comment.text}
                            </c.Comment>
                        )}
                      </div>
                    );
                    

                }
            }),

            CommentForm: React.createClass({
              render: function() {
                return (
                  <div className="commentForm">
                    Hello, world! I am a CommentForm.
                  </div>
                );
              }
            }),

            /* Container
                @prop author : String
             */
            Comment: React.createClass({
              render: function() {
                var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
                return (
                  <div className="comment">
                    <h2 className="commentAuthor">
                      {this.props.author}
                    </h2>
                    <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
                  </div>
                );
              }
            })
        };
        return c;
    }

})(React, marked, 
    {request: $.ajax});