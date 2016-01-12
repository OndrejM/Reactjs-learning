const {
  Checkbox,
  Styles
} = mui;
const ThemeManager = Styles.ThemeManager;

/* App component - represents the whole app
 */
App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>{appCtx.lbl['app.title']}</h1>
        </header>
        <ul>
          {this._renderOneTimeInvestment()}
        </ul>
      </div>
    );
  },

  _renderOneTimeInvestment() {
    return this._renderInputSection(appCtx.lbl['one.time.investment'], <div>BODY</div>);
  },

  _renderInputSection(label, body) {
    return (
      <div className="input-section">
        <div className='input-section-header'>
          <Checkbox
            label={label}
            defaultChecked={true}/>
        </div>
        <div className='input-section-body'>
          {body}
        </div>
      </div>
    );
  },

});
