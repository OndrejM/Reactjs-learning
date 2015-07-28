// tutorial1.js

(function (React, marked) {
    
    var data = [
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Jordan Walke", text: "This is *another* comment"},
      {author: "Ondrej", text: "This is my comment"}
    ];
    
    var c = components();

    React.render(
      <c.CommentBox data={data}/>,
      document.getElementById('content')
    );

    function components() {
        var c = {
            /*  @prop data: Object - model
            */
            CommentBox: React.createClass({
                render: function() {
                    return (
                        <div className="commentBox">
                            <h1>Comments</h1>
                            <c.CommentList data={this.props.data}/>
                            <c.CommentForm />
                        </div>
                    );
                }
            }),
            
            /*  @prop data: Object - model
            */
            CommentList: React.createClass({
                render: function() {
                    var comments = this.props.data.map(function(comment) {
                        return (
                            <c.Comment author={comment.author}>
                                {comment.text}
                            </c.Comment>
                        );
                    });
                    return (
                      <div className="commentList">
                        {comments}
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

/*
  @param React from ReactJS
  @param marked from marked
*/
})(React, marked);