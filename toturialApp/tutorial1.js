// tutorial1.js

(function (React) {
    
    var CommentBox = createCommentBox();
    var CommentList = createCommentList();
    var CommentForm = createCommentForm();
    React.render(
      <CommentBox />,
      document.getElementById('content')
    );

    
    function createCommentBox() {
        return React.createClass({
            render: function() {
                return (
                    <div className="commentBox">
                        <h1>Comments</h1>
                        <CommentList />
                        <CommentForm />
                    </div>
                );
            }
        });
    }
    function createCommentList() {
        return React.createClass({
            render: function() {
                return (
                  <div className="commentList">
                    Hello, world! I am a CommentList.
                  </div>
                );
            }
        });
    }

    function createCommentForm() {
        return React.createClass({
          render: function() {
            return (
              <div className="commentForm">
                Hello, world! I am a CommentForm.
              </div>
            );
          }
        });        
    }

})(React);